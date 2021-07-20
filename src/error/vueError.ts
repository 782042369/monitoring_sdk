/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 16:36:31
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-19 17:49:14
 * @Description:
 */
import BaseMonitor from '../base/baseMonitor'
import { ErrorCategoryEnum, ErrorLevelEnum } from '../base/baseConfig'

/**
 * vue错误
 */
class VueError extends BaseMonitor {
  constructor(params: { reportUrl: string; extendsInfo: any }) {
    super(params)
  }

  /**
   * 处理Vue错误提示
   */
  handleError(Vue: any) {
    if (!Vue) {
      return
    }
    Vue.config.errorHandler = (error: any, vm: any, info: any) => {
      try {
        const metaData: any = {
          message: error.message,
          stack: error.stack,
          info: info,
        }
        if (Object.prototype.toString.call(vm) === '[object Object]') {
          metaData.componentName = vm._isVue
            ? vm.$options.name || vm.$options._componentTag
            : vm.name
          metaData.propsData = vm.$options.propsData
        }
        this.level = ErrorLevelEnum.WARN
        this.msg = JSON.stringify(metaData)
        this.category = ErrorCategoryEnum.VUE_ERROR
        this.recordError()
      } catch (error) {
        console.log('vue错误异常', error)
      }
    }
  }
}
export default VueError
