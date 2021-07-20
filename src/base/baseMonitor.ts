import { ErrorLevelEnum, ErrorCategoryEnum } from '../enum'
import DeviceInfo from '../device'
import { isFunction, isObject } from '../utils'
import TaskQueue from './taskQueue'
import { DataProps, OptionsType } from '../type'
import Breadcrumb from '../base/Breadcrumb'

/**
 * 监控基类
 */
class BaseMonitor {
  category: string
  level: string
  msg: string
  url: string
  line: string
  col: string
  errorObj: DataProps
  reportUrl: OptionsType['reportUrl']
  extendsInfo: OptionsType['extendsInfo']
  appID: OptionsType['appID']
  selector: string
  Breadcrumb: Breadcrumb
  /**
   * 上报错误地址
   * @param {*} params { reportUrl,extendsInfo }
   */
  constructor(params: {
    reportUrl: OptionsType['reportUrl']
    extendsInfo: OptionsType['extendsInfo']
    appID: OptionsType['appID']
  }) {
    this.category = ErrorCategoryEnum.UNKNOW_ERROR // 错误类型
    this.level = ErrorLevelEnum.INFO // 错误等级
    this.msg = '' // 错误信息
    this.url = '' // 错误信息地址
    this.line = '' // 行数
    this.col = '' // 列数
    this.errorObj = {} // 错误堆栈
    this.reportUrl = params.reportUrl // 上报错误地址
    this.extendsInfo = params.extendsInfo // 扩展信息
    this.appID = params.appID // 应用id
    this.selector = '' // 触发错误的元素
    this.Breadcrumb = new Breadcrumb()
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
      this.Breadcrumb.push({
        category: errorInfo.category,
        data: errorInfo.logInfo,
        time: errorInfo.time,
        level: errorInfo.logType,
      })
      console.log('this.Breadcrumb: ', this.Breadcrumb)
      console.log(
        `------------------------ ${this.category} ------------------------\n`,
        errorInfo
      )

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
      url: encodeURIComponent(this.url),
    }
    switch (this.category) {
      case ErrorCategoryEnum.JS_ERROR:
        txt.errorline = this.line
        txt.errorcol = this.col
        if (this?.errorObj?.stack) {
          txt.errorstack = this.errorObj.stack
        }
        break
      default:
        txt.errorother = JSON.stringify(this.errorObj)
        break
    }
    const deviceInfo = this.getDeviceInfo()
    const extendsInfo = this.getExtendsInfo()
    const recordInfo = extendsInfo
    recordInfo.category = this.category // 错误分类
    recordInfo.level = this.level // 错误级别
    recordInfo.logInfo = JSON.stringify(txt) // 错误信息
    recordInfo.deviceInfo = deviceInfo // 设备信息
    recordInfo.appID = this.appID // 应用id
    recordInfo.time = new Date().getTime()
    this.selector && (recordInfo.selector = this.selector)
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

  /**
   * 获取设备信息
   */
  getDeviceInfo() {
    try {
      const deviceInfo = DeviceInfo.getDeviceInfo()
      return JSON.stringify(deviceInfo)
    } catch (error) {
      console.info(error)
      return ''
    }
  }
}
export default BaseMonitor
