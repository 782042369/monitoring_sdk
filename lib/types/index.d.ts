/*
 * @Author: 杨宏旋
 * @Date: 2021-07-22 10:39:11
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-08-18 15:42:29
 * @Description: 全局声明
 */
import { ErrorCategoryEnum, ErrorLevelEnum } from '../src/enum'
declare type DataProps = Record<string, any>
declare interface OptionsType {
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
declare interface ParamsType {
  reportUrl: OptionsType['reportUrl']
  extendsInfo: OptionsType['extendsInfo']
  appID: OptionsType['appID']
}
declare interface ViewModel extends DataProps {
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
