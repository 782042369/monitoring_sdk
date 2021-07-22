/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/*
 * @Author: 杨宏旋
 * @Date: 2021-07-22 10:39:11
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-22 11:06:20
 * @Description:
 */
export declare type DataProps = Record<string, any>
export declare interface OptionsType {
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
export declare interface ParamsType {
  reportUrl: OptionsType['reportUrl']
  extendsInfo: OptionsType['extendsInfo']
  appID: OptionsType['appID']
}
export declare interface ViewModel extends DataProps {
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
export declare interface QueueProps {
  isStop: boolean
  queues: {
    reportUrl: OptionsType['reportUrl']
    data: DataProps
  }[]
  add(reportUrl: OptionsType['reportUrl'], data: DataProps): void
  fire(): void
}
