/**
 * 监控工具
 */
import pagePerformance from './performance.js'
import BaseMonitor from '../base/baseMonitor'
import { CategoryEnum } from '../enum/index.js'
import API from '../base/api.js'
import { markUser, markUv } from '../utils'
import { OptionsType, DataProps } from '../types'
class MonitorPerformance extends BaseMonitor {
  isPage: boolean
  isResource: boolean
  usefulType: string[]
  outTime: number
  config: {
    resourceList: Array<{
      name: string
      initiatorType: string
      nextHopProtocol: string
      redirectTime: string
      dnsTime: string
      tcpTime: string
      ttfbTime: string
      responseTime: string
      reqTotalTime: string
      decodedBodySize: number
    }> // 资源列表
    performance: DataProps
  }
  constructor(options: OptionsType) {
    super({
      reportUrl: options.reportUrl,
      appID: options.appID,
      userID: options.userID,
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
    this.category = CategoryEnum.PERFORMANCE
    this.reportUrl = options.reportUrl || ''
  }

  /**
   * 获取需要上报资源数据类型
   * @param {*} options
   */
  getSourceType(options: {
    isRScript?: boolean
    isRCSS?: boolean
    isRLink?: boolean
    isRIMG?: boolean
  }) {
    const usefulType: string[] = [] // 'navigation'
    // http请求类的数据不走这里上报
    options.isRScript !== false && usefulType.push('script') // 资源数据细分，是否上报script数据
    options.isRCSS !== false && usefulType.push('css') // 资源数据细分，是否上报CSS数据
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
        this.config.performance = pagePerformance.getTiming() || {}
      }
      if (this.isResource) {
        this.config.resourceList =
          pagePerformance.getEntries(this.usefulType, this.reportUrl) || []
      }
      const result = {
        performance: this.config.performance,
        resourceList: this.config.resourceList,
      }
      const extendsInfo = this.getExtendsInfo()
      const data = {
        ...extendsInfo,
        category: this.category,
        log: JSON.stringify(result),
        appID: this.appID,
        markUser: markUser(this.userID), // 用户
        markUv: markUv(), // uv
        url: this?.url || location.href, // url 地址
      }
      localStorage.setItem('page_performance', JSON.stringify(data))
      // 发送监控数据
      new API(this.reportUrl).report(data)
      this.clearPerformance()
    } catch (error) {
      console.info('性能信息上报异常', error)
    }
  }
  clearPerformance() {
    if ((window as any)?.performance?.clearResourceTimings) {
      performance.clearResourceTimings()
      this.config.performance = {}
      this.config.resourceList = []
    }
  }
}

export default MonitorPerformance
