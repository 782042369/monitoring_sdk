/*
 * @Author: 杨宏旋
 * @Date: 2021-07-20 15:06:58
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-20 17:34:23
 * @Description:
 */
import BaseMonitor from '../../base/baseMonitor'
import { ErrorCategoryEnum, ErrorLevelEnum } from '../../enum'
import type { ParamsType } from '../type'
import { isString, getLocationHref } from '../../utils'
import { getBigVersion, vue2VmHandler, vue3VmHandler } from './utils'
import { ViewModel } from './type'

/**
 * vue错误
 */
function handleVueError(
  err: Error,
  vm: ViewModel,
  info: string,
  Vue: { version: any } | null | undefined
) {
  const version = Vue === null || Vue === void 0 ? void 0 : Vue.version
  let data = {
    message: `${err.message}(${info})`,
    url: getLocationHref(),
    name: err.name,
    stack: err.stack || [],
  }
  if (isString(version)) {
    switch (getBigVersion(version)) {
      case 2:
        data = Object.assign(data, vue2VmHandler(vm))
        break
      case 3:
        data = Object.assign(data, vue3VmHandler(vm))
        break
      default:
        return
    }
  }
  console.log('data: ', data)
  return data

  // breadcrumb.push({
  //   type: BREADCRUMBTYPES.VUE,
  //   category: breadcrumb.getCategory(BREADCRUMBTYPES.VUE),
  //   data: data,
  //   level: breadcrumbLevel,
  // })
  // transportData.send(data)
}
class VueError extends BaseMonitor {
  constructor(params: ParamsType) {
    super(params)
  }

  /**
   * 处理Vue错误提示
   */
  handleError(Vue: any) {
    if (!Vue) {
      return
    }
    Vue.config.errorHandler = (error: Error, vm: ViewModel, info: string) => {
      try {
        this.level = ErrorLevelEnum.WARN
        this.msg = JSON.stringify(handleVueError(error, vm, info, Vue))
        this.category = ErrorCategoryEnum.VUE_ERROR
        this.recordError()
      } catch (error) {
        console.info('vue错误异常', error)
      }
    }
  }
}
export default VueError
