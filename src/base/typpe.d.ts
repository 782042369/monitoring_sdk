/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 18:56:37
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-20 19:03:37
 * @Description:
 */
export type DataProps = any

export type ObjectProps = Record<string, any>

export interface QueueProps {
  isStop: boolean
  queues: {
    reportUrl: string
    data: DataProps
  }[]
  add(reportUrl: string, data: DataProps): void
  fire(): void
}
