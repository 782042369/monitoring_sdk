/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 16:36:31
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-22 11:11:42
 * @Description:
 */
import BaseMonitor from '../base/baseMonitor'
import { ErrorCategoryEnum, ErrorLevelEnum } from '../enum'
import { ParamsType } from '../types'
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
