/**
 * 监控工具
 */
import pagePerformance from './performance.js'
import BaseMonitor from '../base/baseMonitor'
import { ErrorLevelEnum, ErrorCategoryEnum } from '../enum/index.js'
import API from '../base/api.js'
import { MyDate } from '../utils'
import { OptionsType } from '../type'
import { DataProps } from '../type'

class MonitorPerformance extends BaseMonitor {
  isPage: any
  isResource: any
  usefulType: string[]
  outTime: number
  config: any
  constructor(options: {
    reportUrl: OptionsType['reportUrl']
    extendsInfo: OptionsType['extendsInfo']
    appID: OptionsType['appID']
    isPage: OptionsType['isPage']
    isResource: OptionsType['isResource']
  }) {
    super({
      reportUrl: options.reportUrl,
      appID: options.appID,
      extendsInfo: options.extendsInfo,
    })
    options.isPage = options.isPage !== false
    options.isResource = options.isResource !== false
    this.isPage = options.isPage // 是否上报页面性能数据
    this.isResource = options.isResource // 是否上报页面资源数据
    this.usefulType = this.getSourceType(options)
    this.outTime = 50
    this.config = {
      resourceList: [], // 资源列表
      performance: {}, // 页面性能列表
    }
    this.category = ErrorCategoryEnum.PERFORMANCE
    this.reportUrl = options.reportUrl || ''
  }

  /**
   * 获取需要上报资源数据类型
   * @param {*} options
   */
  getSourceType(options: {
    reportUrl: OptionsType['reportUrl']
    appID: OptionsType['appID']
    extendsInfo?: DataProps
    isPage?: boolean
    isResource?: boolean
    isRScript?: boolean
    isRCSS?: boolean
    isRFetch?: any
    isRXHR?: boolean
    isRLink?: boolean
    isRIMG?: boolean
  }) {
    const usefulType = [] // 'navigation'
    options.isRScript !== false && usefulType.push('script') // 资源数据细分，是否上报script数据
    options.isRCSS !== false && usefulType.push('css') // 资源数据细分，是否上报CSS数据
    options.isRFetch !== false && usefulType.push('fetch') // 资源数据细分，是否上报Fetch数据
    options.isRXHR !== false && usefulType.push('xmlhttprequest') // 资源数据细分，是否上报XHR数据
    options.isRLink !== false && usefulType.push('link') // 资源数据细分，是否上报Link数据
    options.isRIMG !== false && usefulType.push('img') // 资源数据细分，是否上报IMG数据
    return usefulType
  }

  /**
   * 记录页面信息
   * @param {*} options  {pageId ：页面标示,url ：上报地址}
   */
  record() {
    try {
      if (this.isPage) {
        this.config.performance = pagePerformance.getTiming()
      }
      if (this.isResource) {
        this.config.resourceList = pagePerformance.getEntries(this.usefulType)
      }
      const result = {
        curTime: new MyDate().format('yyyy-MM-dd HH:mm:ss'),
        performance: this.config.performance,
        resourceList: this.config.resourceList,
        markUser: this.markUser(),
        markUv: this.markUv(),
      }
      const extendsInfo = this.getExtendsInfo()
      const data = {
        ...extendsInfo,
        category: this.category,
        logType: ErrorLevelEnum.INFO,
        logInfo: JSON.stringify(result),
        deviceInfo: this.getDeviceInfo(),
      }
      localStorage.setItem('page_performance', JSON.stringify(data))
      // 发送监控数据
      new API(this.reportUrl).report(data)
      this.clearPerformance()
    } catch (error) {
      console.info('性能信息上报异常', error)
    }
  }

  randomString(len: number | undefined = 10) {
    const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789'
    const maxPos = $chars.length
    let pwd = ''
    for (let i = 0; i < len; i++) {
      pwd = pwd + $chars.charAt(Math.floor(Math.random() * maxPos))
    }
    return pwd + new Date().getTime()
  }

  /**
   * 获得markpage
   */
  markUser() {
    let psMarkUser = sessionStorage.getItem('ps_markUser') || ''
    if (!psMarkUser) {
      psMarkUser = this.randomString()
      sessionStorage.setItem('ps_markUser', psMarkUser)
    }
    return psMarkUser
  }

  /**
   * 获得Uv
   */
  markUv() {
    const date = new MyDate()
    let psMarkUv = localStorage.getItem('ps_markUv') || ''
    const datatime: any = localStorage.getItem('ps_markUvTime') || ''
    const today = date.format('yyyy/MM/dd 23:59:59')
    if ((!psMarkUv && !datatime) || date.getTime() > datatime * 1) {
      psMarkUv = this.randomString()
      localStorage.setItem('ps_markUv', psMarkUv)
      localStorage.setItem(
        'ps_markUvTime',
        JSON.stringify(new Date(today).getTime())
      )
    }
    return psMarkUv
  }

  clearPerformance() {
    if ((window as any)?.performance?.clearResourceTimings) {
      performance.clearResourceTimings()
      this.config.performance = {}
      this.config.resourceList = ''
    }
  }
}

export default MonitorPerformance
