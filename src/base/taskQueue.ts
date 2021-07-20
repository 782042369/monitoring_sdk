import API from './api'
import { DataProps } from './typpe'
/* eslint-disable */
interface QueueProps {
  isStop: boolean
  queues: {
    reportUrl: string
    data: DataProps
  }[]
  add(reportUrl: string, data: DataProps): void
  fire(): void
}
/**
 * 消息队列
 */
let TaskQueue: QueueProps = {
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
  add(reportUrl: string, data: DataProps) {
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
    let item = this.queues[0]
    item.reportUrl && new API(item.reportUrl).report(item.data)
    this.queues.splice(0, 1)
    this.fire() // 递归
  },
}

export default TaskQueue
