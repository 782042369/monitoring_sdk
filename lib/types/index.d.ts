/*
 * @Author: 杨宏旋
 * @Date: 2021-07-22 10:39:11
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-12-22 15:36:48
 * @Description: 全局声明
 */
import { ErrorCategoryEnum, ErrorLevelEnum } from '../src/enum'
export type DataProps = Record<string, any>
export type OptionsType = {
  isPage: boolean
  isResource: boolean
  reportUrl: string
  appID: string
  jsError?: boolean
  promiseError?: boolean
  resourceError?: boolean
  ajaxError?: boolean
  vueError?: boolean
  vue?: boolean
  extendsInfo: DataProps
}
export type ParamsType = {
  reportUrl: OptionsType['reportUrl']
  extendsInfo: OptionsType['extendsInfo']
  appID: OptionsType['appID']
}
export type ViewModel = DataProps & {
  $root: Record<string, unknown>
  $options: {
    [key: string]: any
    name?: string
    propsData?: DataProps
    _componentTag?: string
    __file?: string
    props?: DataProps
  }
  $props: Record<string, unknown>
}
