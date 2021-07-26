/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 18:15:10
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-07-26 19:11:45
 * @Description:
 */
import API from './api'
import { OptionsType, QueueProps } from '../types'
import { ErrorCategoryEnum, ErrorLevelEnum } from '../enum'
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
      category: ErrorCategoryEnum
      level: ErrorLevelEnum
      deviceInfo: string
      appID: OptionsType['appID']
      time: number
      url: string
      logInfo: string
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
