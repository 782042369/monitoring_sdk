/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 16:36:31
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-12-22 18:16:53
 * @Description:
 */
import BaseMonitor from '../base/baseMonitor'
import { CategoryEnum } from '../enum'
import { ParamsType } from '../types'
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
        this.category = CategoryEnum.JS
        this.msg = msg
        this.url = url
        this.line = line
        this.col = col
        this.errorObj = error
        this.recordError()
      } catch (error) {
        console.info('js错误异常', error)
      }
    }
  }
}
export default JSError
