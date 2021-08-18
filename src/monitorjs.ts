/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 16:17:00
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-08-18 15:37:30
 * @Description:
 */

import {
  AjaxError,
  JsError,
  PromiseError,
  ResourceError,
  VueError,
} from './error'
import MonitorPerformance from './performance'
import { checkUrl } from './utils'
import { OptionsType } from 'types'
class MonitorJS {
  jsError: boolean
  promiseError: boolean
  resourceError: boolean
  ajaxError: boolean
  vueError: boolean
  constructor() {
    this.jsError = true
    this.promiseError = true
    this.resourceError = true
    this.ajaxError = true
    this.vueError = false
  }
  /**
   * 处理异常信息初始化
   * @param {OptionsType} options
   */
  init(options: OptionsType) {
    if (!options?.reportUrl || !checkUrl(options.reportUrl)) {
      throw `reportUrl is error,${options.reportUrl}`
    }
    if (!options?.appID) {
      throw `appID is error,${options.appID}`
    }
    this.jsError = !(options?.jsError === false)
    this.promiseError = !(options?.promiseError === false)
    this.resourceError = !(options?.resourceError === false)
    this.ajaxError = !(options?.ajaxError === false)
    this.vueError = options?.vueError === true // 显式配置
    const reportUrl = options.reportUrl // 上报错误地址
    const appID = options.appID // 上报id
    const extendsInfo = options.extendsInfo || {} // 扩展信息（一般用于系统个性化分析）
    const param = { reportUrl, extendsInfo, appID }

    if (this.jsError) {
      new JsError(param).handleError()
    }
    if (this.promiseError) {
      new PromiseError(param).handleError()
    }
    if (this.resourceError) {
      new ResourceError(param).handleError()
    }
    if (this.ajaxError) {
      new AjaxError(param).handleError()
    }
    if (this.vueError && options.vue) {
      new VueError(param).handleError(options.vue)
    }
    this.monitorPerformance(options)
  }

  /**
   * 监听页面性能
   * @param {OptionsType} options {pageId：页面标示,url：上报地址}
   */
  monitorPerformance(options: OptionsType) {
    // new MonitorNetworkSpeed(options).reportNetworkSpeed();
    const recordFunc = () => {
      new MonitorPerformance(options).record()
    }
    recordFunc()
    window.removeEventListener('unload', recordFunc)
    window.addEventListener('unload', recordFunc)
  }
}
export default MonitorJS
