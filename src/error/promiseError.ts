/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 16:36:31
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-21 16:04:40
 * @Description:
 */
import BaseMonitor from '../base/baseMonitor'
import { ErrorCategoryEnum, ErrorLevelEnum } from '../enum'
import type { ParamsType } from './type'
import getLastEvent from 'src/utils/getLastEvent'
import getSelector from 'src/utils/getSelector'

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
        const lastEvent: any = getLastEvent() // 最后一个交互事件
        const selector = lastEvent ? getSelector(lastEvent.path) : '' // 代表最后一个操作的元素
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
          this.errorObj = event.reason
          this.selector = selector
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
