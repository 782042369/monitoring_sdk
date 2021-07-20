/*
 * @Author: 杨宏旋
 * @Date: 2021-07-20 17:30:30
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-20 17:32:03
 * @Description:
 */
export interface IAnyObject {
  [key: string]: any
}
export interface ViewModel {
  [key: string]: any
  $root: Record<string, unknown>
  $options: {
    [key: string]: any
    name?: string
    propsData?: IAnyObject
    _componentTag?: string
    __file?: string
    props?: IAnyObject
  }
  $props: Record<string, unknown>
}
