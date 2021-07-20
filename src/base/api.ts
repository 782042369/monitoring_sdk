/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 18:15:10
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-20 11:00:04
 * @Description:
 */
import { checkUrl } from '../util'
import { DataProps } from './typpe'
/**
 * 数据持久化
 */
class API {
  url: string
  constructor(url: string) {
    this.url = url
  }
  /**
   * 上报信息 （默认方式）
   * isFetch ：是否优先通过fetch上报
   */
  report(data: DataProps) {
    if (!checkUrl(this.url)) {
      console.log('上报信息url地址格式不正确,url=', this.url)
      return
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
        fetch(this.url, {
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
      console.log('fetch请求异常', error)
    }
    try {
      const xhr = new XMLHttpRequest()
      xhr.open('POST', this.url, true)
      // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.send(dataStr)
    } catch (error) {
      console.log(error)
    }
  }

  /**
   * 通过img方式上报信息
   */
  reportByImg(data: DataProps) {
    if (!checkUrl(this.url)) {
      console.log('上报信息url地址格式不正确,url=', this.url)
      return
    }
    try {
      const img = new Image()
      img.src =
        this.url +
        '/up.gif?v=' +
        new Date().getTime() +
        '&' +
        this.formatParams(data)
    } catch (error) {
      console.log(error)
    }
  }

  /**
   * sendBeacon上报
   */
  reportByNavigator(data: DataProps) {
    navigator.sendBeacon && navigator.sendBeacon(this.url, data)
  }

  /*
   *格式化参数
   */
  formatParams(data: Record<string, any>) {
    const arr = []
    for (const name in data) {
      arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]))
    }
    return arr.join('&')
  }
}
export default API
