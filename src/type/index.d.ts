/*
 * @Author: 杨宏旋
 * @Date: 2021-07-20 19:00:52
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-20 19:26:57
 * @Description:
 */
export type DataProps = Record<string, any>
export interface OptionsType {
  isPage: boolean
  isResource: boolean
  reportUrl: OptionsType['reportUrl']
  appID: OptionsType['appID']
  jsError?: boolean
  promiseError?: boolean
  resourceError?: boolean
  ajaxError?: boolean
  vueError?: boolean
  vue?: boolean
  extendsInfo: DataProps
}
