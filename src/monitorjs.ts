/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 16:17:00
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-12-27 18:07:42
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
import { OptionsType } from './types'
import { StorageKeyEnum } from './enum'
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
    const param = { reportUrl, extendsInfo, appID, userID: options.userID }

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
    /**
     * pv统计刷新页面 清空本地缓存
     */
    const recordFunc = () => {
      alert(1)
      sessionStorage.removeItem(StorageKeyEnum.FIRST_PV)
    }
    window.addEventListener('beforeunload', recordFunc)
    window.removeEventListener('beforeunload', recordFunc)
  }

  /**
   * 监听页面性能
   * @param {OptionsType} options {pageId：页面标示,url：上报地址}
   */
  monitorPerformance(options: OptionsType) {
    const recordFunc = () => {
      new MonitorPerformance(options).record()
    }
    window.onload = function () {
      setTimeout(() => {
        // 延迟上报
        recordFunc()
      }, 300)
    }
  }
}
export default MonitorJS
