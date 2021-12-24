/*
 * @Author: 杨宏旋
 * @Date: 2021-07-22 10:39:11
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-12-24 14:17:58
 * @Description: 全局声明
 */
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
  extendsInfo: DataProps
  vue?: boolean
  userID?: number | string
  isRScript?: boolean
  isRCSS?: boolean
  isRLink?: boolean
  isRIMG?: boolean
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
