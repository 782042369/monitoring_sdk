/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 16:36:31
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-12-22 18:16:55
 * @Description:
 */
import BaseMonitor from '../base/baseMonitor'
import { CategoryEnum } from '../enum'
import { ParamsType } from '../types'

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
      (event: any) => {
        try {
          if (!event || !event.reason) {
            return
          }
          // 判断当前被捕获的异常url，是否是异常处理url，防止死循环
          if (event?.reason?.config?.url) {
            this.url = event.reason.config.url
          }
          this.category = CategoryEnum.PROMISE
          this.msg = event.reason
          this.errorObj = event.reason
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
