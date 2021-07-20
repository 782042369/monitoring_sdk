/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 16:36:31
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-20 13:39:11
 * @Description:
 */
import BaseMonitor from '../base/baseMonitor'
import { ErrorCategoryEnum, ErrorLevelEnum } from '../base/baseConfig'
import type { ParamsType } from './type'
import getSelector from '../util/getSelector'
import getLastEvent from '../util/getLastEvent'
/**
 * 资源加载错误
 */
class ResourceError extends BaseMonitor {
  constructor(params: ParamsType) {
    super(params)
  }

  /**
   * 注册onerror事件
   */
  handleError() {
    window.addEventListener(
      'error',
      (event) => {
        const lastEvent: any = getLastEvent() // 最后一个交互事件
        const selector = lastEvent ? getSelector(lastEvent.path) : '' // 代表最后一个操作的元素
        try {
          if (!event) {
            return
          }
          this.category = ErrorCategoryEnum.RESOURCE_ERROR
          const target: any = event.target || event.srcElement
          const isElementTarget =
            target instanceof HTMLScriptElement ||
            target instanceof HTMLLinkElement ||
            target instanceof HTMLImageElement
          if (!isElementTarget) {
            return // js error不再处理
          }
          this.level = ErrorLevelEnum.ERROR
          this.msg = `加载 ${target.tagName} 资源错误`
          this.url = target.src || target.href
          this.errorObj = target
          this.selector = selector
          this.recordError()
        } catch (error) {
          console.info('资源加载收集异常', error)
        }
      },
      true
    )
  }
}
export default ResourceError
