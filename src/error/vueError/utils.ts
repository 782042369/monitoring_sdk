/*
 * @Author: 杨宏旋
 * @Date: 2021-07-20 17:27:51
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-12-22 15:36:19
 * @Description:
 */

import { ViewModel } from '../../types'

export function vue3VmHandler(vm: ViewModel) {
  let componentName = ''
  if (vm.$root === vm) {
    componentName = 'root'
  } else {
    const name_2 = vm.$options && vm.$options.name
    componentName = name_2 ? `component <${name_2}>` : 'anonymous component'
  }
  return {
    componentName: componentName,
    propsData: vm.$props,
  }
}
export function vue2VmHandler(vm: ViewModel) {
  let componentName = ''
  if (vm.$root === vm) {
    componentName = 'root'
  } else {
    const name_1 = vm._isVue
      ? (vm.$options && vm.$options.name) ||
        (vm.$options && vm.$options._componentTag)
      : vm.name
    componentName =
      (name_1 ? `component <${name_1}>` : 'anonymous component') +
      (vm._isVue && vm.$options && vm.$options.__file
        ? ` at ${vm.$options && vm.$options.__file}`
        : '')
  }
  return {
    componentName: componentName,
    propsData: vm.$options && vm.$options.propsData,
  }
}
export function getBigVersion(version: string) {
  return Number(version.split('.')[0])
}
