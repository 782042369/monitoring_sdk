/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 16:36:31
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-21 13:02:18
 * @Description:
 */
import BaseMonitor from '../base/baseMonitor'
import { ErrorCategoryEnum, ErrorLevelEnum } from '../enum'
import type { ParamsType } from './type'
import getSelector from '../utils/getSelector'
import getLastEvent from '../utils/getLastEvent'
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
      const lastEvent: any = getLastEvent() // 最后一个交互事件
      const selector = lastEvent ? getSelector(lastEvent.path) : '' // 代表最后一个操作的元素
      try {
        this.level = ErrorLevelEnum.WARN
        this.category = ErrorCategoryEnum.JS_ERROR
        this.msg = msg
        this.url = url
        this.line = line
        this.col = col
        this.errorObj = error
        this.selector = selector
        this.recordError()
      } catch (error) {
        console.info('js错误异常', error)
      }
    }
  }
}
export default JSError
