/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 16:36:31
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-20 11:03:55
 * @Description:
 */
import BaseMonitor from '../base/baseMonitor'
import { ErrorCategoryEnum, ErrorLevelEnum } from '../base/baseConfig'
import { ParamsType } from './type'

/**
 * 捕获JS错误
 */
class JSError extends BaseMonitor {
  constructor(params: ParamsType) {
    super(params)
  }

  /**
   * 注册onerror事件
   */
  handleError() {
    window.onerror = (msg: any, url: any, line: any, col: any, error: any) => {
      try {
        this.level = ErrorLevelEnum.WARN
        this.category = ErrorCategoryEnum.JS_ERROR
        this.msg = msg
        this.url = url
        this.line = line
        this.col = col
        this.errorObj = error
        this.recordError()
      } catch (error) {
        console.log('js错误异常', error)
      }
    }
  }
}
export default JSError
