/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 16:17:00
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-20 10:59:45
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
import { AjaxLibEnum } from './base/baseConfig'
import { checkUrl } from './util'
interface OptionsType {
  isPage: boolean
  isResource: boolean
  url: string
  appID: string
  jsError?: boolean
  promiseError?: boolean
  resourceError?: boolean
  ajaxError?: boolean
  vueError?: boolean
  vue?: boolean
  extendsInfo: Record<string, any>
}

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
   * @param {*} options
   */
  init(options: OptionsType) {
    if (!options?.url || !checkUrl(options.url)) {
      throw `url is error,${options.url}`
    }
    if (!options?.appID) {
      throw `appID is error,${options.url}`
    }
    this.jsError = !(options?.jsError === false)
    this.promiseError = !(options?.promiseError === false)
    this.resourceError = !(options?.resourceError === false)
    this.ajaxError = !(options?.ajaxError === false)
    this.vueError = options?.vueError === true // 显式配置
    const reportUrl = options.url // 上报错误地址
    const appId = options.appID // 上报id
    const extendsInfo = options.extendsInfo || {} // 扩展信息（一般用于系统个性化分析）
    const param = { reportUrl, extendsInfo, appId }

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
      new AjaxError(param).handleError(AjaxLibEnum.DEFAULT)
    }
    if (this.vueError && options.vue) {
      new VueError(param).handleError(options.vue)
    }
    this.monitorPerformance(options)
  }

  /**
   * 监听页面性能
   * @param {*} options {pageId：页面标示,url：上报地址}
   */
  monitorPerformance(options: OptionsType) {
    options = options || {}
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
