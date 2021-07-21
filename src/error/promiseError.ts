/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 16:36:31
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-21 12:31:43
 * @Description:
 */
import BaseMonitor from '../base/baseMonitor'
import { ErrorCategoryEnum, ErrorLevelEnum } from '../enum'
import type { ParamsType } from './type'

/**
 * 捕获未处理的Promise异常
 */
class PromiseError extends BaseMonitor {
  constructor(params: ParamsType) {
    super(params)
  }

  /**
   * 处理错误
   */
  handleError() {
    window.addEventListener(
      'unhandledrejection',
      (event) => {
        try {
          if (!event || !event.reason) {
            return
          }
          // 判断当前被捕获的异常url，是否是异常处理url，防止死循环
          if (event?.reason?.config?.url) {
            this.url = event.reason.config.url
          } else {
            this.url = location.href
          }
          this.level = ErrorLevelEnum.WARN
          this.category = ErrorCategoryEnum.PROMISE_ERROR
          this.msg = event.reason
          console.log('this: ', this)
          this.recordError()
        } catch (error) {
          console.info(error)
        }
      },
      true
    )
  }
}
export default PromiseError
