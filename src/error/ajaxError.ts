import BaseMonitor from '../base/baseMonitor'
import { CategoryEnum, AjaxLibEnum, AjaxMethodEnum } from '../enum'
import { OptionsType, ParamsType } from '../types'
/**
 * ajax error异常
 */
class AjaxError {
  params: ParamsType
  constructor(params: ParamsType) {
    this.params = params
  }
  /**
   * 处理错误
   * @param type {*} ajax库类型
   * @param error{*} 错误信息
   */
  handleError() {
    new XHRError(this.params)
  }
}
/**
 * 获取HTTP错误信息
 */
class XHRError extends BaseMonitor {
  constructor(params: {
    reportUrl: OptionsType['reportUrl']
    extendsInfo: OptionsType['extendsInfo']
    appID: OptionsType['appID']
  }) {
    super(params)
    if (window.XMLHttpRequest) {
      this.handleXhrError()
    }
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!window.fetch) {
      this.handleFetchError()
    }
  }
  /**
   *
   * @param type 接口类型
   * @param startTime 请求开始事件
   * @param self 接口参数
   * @param ajaxlib AjaxLibEnum
   */
  _handleEvent(
    type: 'error' | 'load' | 'abort',
    startTime: number,
    self: {
      status: number
      response: any
      decodedBodySize?: number
      responseText?: string
    },
    lib: AjaxLibEnum,
    logData: {
      method: string
      url: string
    }
  ) {
    try {
      const duration = Date.now() - startTime
      this.category = CategoryEnum.AJAX
      this.msg = CategoryEnum.AJAX
      this.errorObj = {
        status: self.status, // 状态码
        duration, // 请求用时
        type, // 状态
        method: logData.method.toLowerCase(), // 请求方式
        lib,
        path: logData.url,
        decodedBodySize:
          self.decodedBodySize || self?.responseText?.length || 0,
      }
      this.recordError()
    } catch (error) {
      console.info(error)
    }
  }
  /**
   * 获取XMLHttpRequest 错误信息
   */
  handleXhrError() {
    const self = this
    // 原生 XMLHttpRequest 监听
    const oldOpen = XMLHttpRequest.prototype.open
    ;(XMLHttpRequest as any).prototype.open = function (
      method: AjaxMethodEnum,
      url: string
    ) {
      if (!url.match(/up.gif/) && !url.match(/sockjs/)) {
        this.logData = {
          method: method || AjaxMethodEnum.GET,
          url,
        }
      }
      return oldOpen.apply(this, arguments as any)
    }
    const xhrSend: any = XMLHttpRequest.prototype.send
    ;(XMLHttpRequest as any).prototype.send = function () {
      if (this.addEventListener && this.logData) {
        const startTime = Date.now() //在发送之前记录一下开始的时间
        ;['error', 'load', 'abort', 'onreadystatechange'].map((ele: any) => {
          //    xhr.xhr.responseText.length
          this.addEventListener(ele, () => {
            self._handleEvent(
              ele,
              startTime,
              this,
              AjaxLibEnum.XHR,
              this.logData
            )
          })
        })
      }
      return xhrSend.apply(this, arguments)
    }
  }
  handleFetchError() {
    const self = this
    const originFetch = window.fetch
    ;(window as any).fetch = function (...args: any) {
      const logData: {
        method: AjaxMethodEnum
        url: string
      } = {
        method: AjaxMethodEnum.GET,
        url: '',
      }
      logData.method = args?.[1]?.method || AjaxMethodEnum.GET
      logData.url = args[0]
      const startTime = Date.now() //在发送之前记录一下开始的时间
      originFetch
        .apply(this, args)
        .then(async (res) => {
          const tempRes = res.clone()
          const decodedBodySize = await res.text()
          self._handleEvent(
            res.ok ? 'load' : 'error',
            startTime,
            {
              status: tempRes.status || res.ok ? 200 : 500,
              response: res,
              decodedBodySize: decodedBodySize.length,
            },
            AjaxLibEnum.FETCH,
            logData
          )
        })
        .catch((error) => {
          self._handleEvent(
            'error',
            startTime,
            {
              status: 500,
              response: error,
            },
            AjaxLibEnum.FETCH,
            logData
          )
          throw error
        })
    }
  }
}
export default AjaxError
