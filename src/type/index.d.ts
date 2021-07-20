/*
 * @Author: 杨宏旋
 * @Date: 2021-07-20 19:00:52
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-20 19:23:19
 * @Description:
 */
export interface OptionsType {
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
  extendsInfo: Record<string, any>
}
