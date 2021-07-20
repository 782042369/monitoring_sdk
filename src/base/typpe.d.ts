/* eslint-disable no-unused-vars */
/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 18:56:37
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-20 19:30:46
 * @Description:
 */
import { OptionsType, DataProps } from '../type'

export type ObjectProps = DataProps

export interface QueueProps {
  isStop: boolean
  queues: {
    reportUrl: OptionsType['reportUrl']
    data: DataProps
  }[]
  add(reportUrl: OptionsType['reportUrl'], data: DataProps): void
  fire(): void
}
