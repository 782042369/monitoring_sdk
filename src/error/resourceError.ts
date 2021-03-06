/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 16:36:31
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-12-22 18:16:58
 * @Description:
 */
import BaseMonitor from '../base/baseMonitor'
import { CategoryEnum } from '../enum'
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
          this.category = CategoryEnum.RESOURCE
          const target: any = event.target || event.srcElement
          const isElementTarget =
            target instanceof HTMLScriptElement ||
            target instanceof HTMLLinkElement ||
            target instanceof HTMLImageElement
          if (!isElementTarget) {
            return // js error不再处理
          }
          this.msg = `加载 ${target.tagName} 资源错误`
          this.url = location.href
          this.errorObj = {
            ...target,
            src: (target as any).src || (target as any).href,
          }
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
