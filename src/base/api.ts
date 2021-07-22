/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 18:15:10
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-22 10:55:50
 * @Description:
 */
import { DataProps } from '../types'
import { checkUrl } from '../utils'

/**
 * 数据持久化
 */
class API {
  reportUrl: string
  constructor(reportUrl: string) {
    this.reportUrl = reportUrl
  }
  /**
   * 上报信息 （默认方式）
   */
  report(data: DataProps) {
    if (!checkUrl(this.reportUrl)) {
      throw `上报信息url地址格式不正确,reportUrl=${this.reportUrl}`
    }
    this.reportByImg(data)
  }

  /**
   * 发送消息
   */
  sendInfo(data: DataProps) {
    const dataStr = JSON.stringify(data)
    try {
      if (fetch) {
        fetch(this.reportUrl, {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: dataStr,
          mode: 'same-origin', // 告诉浏览器是同源，同源后浏览器不会进行预检请求
          keepalive: true,
        })
        return
      }
    } catch (error) {
      console.info('fetch请求异常', error)
    }
    try {
      const xhr = new XMLHttpRequest()
      xhr.open('POST', this.reportUrl, true)
      // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.send(dataStr)
    } catch (error) {
      console.info(error)
    }
  }

  /**
   * 通过img方式上报信息
   */
  reportByImg(data: DataProps) {
    if (!checkUrl(this.reportUrl)) {
      throw `上报信息url地址格式不正确,reportUrl=${this.reportUrl}`
    }
    try {
      const img = new Image()
      img.src = `${
        this.reportUrl
      }/up.gif?v=${new Date().getTime()}&${this.formatParams(data)}`
    } catch (error) {
      console.info(error)
    }
  }

  // /**
  //  * sendBeacon上报
  //  */
  // reportByNavigator(data:DataProps) {
  //   navigator.sendBeacon && navigator.sendBeacon(this.reportUrl, data)
  // }

  /*
   *格式化参数
   */
  formatParams(data: DataProps) {
    const arr = []
    for (const name in data) {
      arr.push(`${encodeURIComponent(name)}=${encodeURIComponent(data[name])}`)
    }
    return arr.join('&')
  }
}
export default API
