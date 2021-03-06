/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 18:15:10
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-12-27 10:30:13
 * @Description:
 */
import API from './api'
import { OptionsType, DataProps } from '../types'
import { CategoryEnum } from '../enum'
interface QueueProps {
  isStop: boolean
  queues: {
    reportUrl: OptionsType['reportUrl']
    data: {
      category: CategoryEnum
      appID: OptionsType['appID']
      url: string
      log: string
      markUser: string
      markUv: string
    }
  }[]
  // eslint-disable-next-line no-unused-vars
  add(reportUrl: OptionsType['reportUrl'], data: DataProps): void
  fire(): void
}

/**
 * 消息队列
 */
const TaskQueue: QueueProps = {
  /**
   * 是否停止fire
   */
  isStop: true,

  /**
   * 待处理消息列表
   */
  queues: [],
  /**
   * 添加消息
   * @param {*} reportUrl 上报url
   * @param {*} data 上报数据
   */
  add(
    reportUrl: OptionsType['reportUrl'],
    data: {
      category: CategoryEnum
      appID: OptionsType['appID']
      url: string
      log: string
      markUser: string
      markUv: string
    }
  ) {
    this.queues.push({ reportUrl, data })
  },

  /**
   * 统一上报
   */
  fire() {
    if (!this.queues || this.queues.length === 0) {
      this.isStop = true
      return
    }
    this.isStop = false
    const item = this.queues[0]
    new API(item.reportUrl).report(item.data)
    this.queues.splice(0, 1)
    this.fire() // 递归
  },
}

export default TaskQueue
