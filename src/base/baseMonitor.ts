import { CategoryEnum } from '../enum'
import { isFunction, isObject, markUser, markUv } from '../utils'
import TaskQueue from './taskQueue'
// import Breadcrumb from '../base/Breadcrumb'
import { OptionsType, DataProps } from '../types'
import getSelector from '../utils/getSelector'
import getLastEvent from '../utils/getLastEvent'

/**
 * 监控基类
 */
class BaseMonitor {
  category: CategoryEnum
  msg: string
  url: string
  line: string
  col: string
  errorObj: DataProps
  reportUrl: OptionsType['reportUrl']
  extendsInfo: OptionsType['extendsInfo']
  appID: OptionsType['appID']
  userID?: OptionsType['userID']
  // Breadcrumb: Breadcrumb
  /**
   * 上报错误地址
   * @param {*} params { reportUrl,extendsInfo }
   */
  constructor(params: {
    reportUrl: OptionsType['reportUrl']
    extendsInfo: OptionsType['extendsInfo']
    appID: OptionsType['appID']
    userID?: OptionsType['userID']
  }) {
    this.category = CategoryEnum.UNKNOW // 错误类型
    this.msg = '' // 错误信息
    this.url = '' // 错误信息地址
    this.line = '' // 行数
    this.col = '' // 列数
    this.errorObj = {} // 错误堆栈
    this.reportUrl = params.reportUrl // 上报错误地址
    this.extendsInfo = params.extendsInfo // 扩展信息
    this.appID = params.appID // 应用id
    if (params.userID !== undefined) {
      this.userID = params.userID // 用户id
    }
    // this.Breadcrumb = new Breadcrumb()
  }

  /**
   * 记录错误信息
   */
  recordError() {
    this.handleRecordError()
    // 延迟记录日志
    setTimeout(() => {
      TaskQueue.isStop && TaskQueue.fire() // 停止则fire
    }, 100)
  }

  /**
   * 处理记录日志
   */
  handleRecordError() {
    try {
      if (!this.msg) {
        return
      }
      // 过滤掉错误上报地址
      if (
        this.reportUrl &&
        this.url &&
        this.url.toLowerCase().indexOf(this.reportUrl.toLowerCase()) >= 0
      ) {
        console.info('统计错误接口异常', this.msg)
        return
      }
      const errorInfo = this.handleErrorInfo()
      // this.Breadcrumb.push({
      //   category: errorInfo.category,
      //   data: errorInfo.logInfo,
      // })
      // 记录日志
      TaskQueue.add(this.reportUrl, errorInfo)
    } catch (error) {
      console.info(error)
    }
  }

  /**
   * 处理错误信息
   * @param {*} extendsInfo
   */
  handleErrorInfo() {
    const txt: DataProps = {
      loginformation: this.msg,
    }
    if (this?.errorObj?.stack) {
      txt.errorstack = this.errorObj.stack
    }
    switch (this.category) {
      case CategoryEnum.JS:
        txt.errorline = this.line
        txt.errorcol = this.col
        break
      default:
        txt.logother = this.errorObj
        break
    }
    const lastEvent: any = getLastEvent() // 最后一个交互事件
    const selector = lastEvent ? getSelector(lastEvent.path) : '' // 代表最后一个操作的元素
    const extendsInfo = this.getExtendsInfo()
    const recordInfo: {
      category: string
      appID: string
      url: string
      log: string
      markUser: string | number
      markUv: string
      selector?: string
      preUrl?: string
    } = {
      ...extendsInfo,
      category: this.category, // 错误分类
      appID: this.appID, // 应用id
      url: this?.url || location.href, // url 地址
      log: JSON.stringify(txt), // 错误信息
      markUser: markUser(this.userID), // 用户
      markUv: markUv(), // uv
      // 来自域名
      preUrl:
        document.referrer && document.referrer !== location.href
          ? document.referrer
          : '',
    }
    selector && (recordInfo.selector = selector)
    return recordInfo
  }

  /**
   * 获取扩展信息
   */
  getExtendsInfo() {
    try {
      const ret: DataProps = {}
      let extendsInfo = this.extendsInfo || {}
      let dynamicParams
      if (isFunction(extendsInfo.getDynamic)) {
        dynamicParams = extendsInfo.getDynamic() // 获取动态参数
      }
      // 判断动态方法返回的参数是否是对象
      if (isObject(dynamicParams)) {
        extendsInfo = { ...extendsInfo, ...dynamicParams }
      }
      // 遍历扩展信息，排除动态方法
      for (const key in extendsInfo) {
        if (!isFunction(extendsInfo[key])) {
          // 排除获取动态方法
          ret[key] = extendsInfo[key]
        }
      }
      return ret
    } catch (error) {
      console.info('call getExtendsInfo error', error)
      return {}
    }
  }
}
export default BaseMonitor
