/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 18:33:32
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-20 11:03:43
 * @Description:
 */
import BaseMonitor from '../base/baseMonitor'
import { ErrorCategoryEnum, ErrorLevelEnum } from '../base/baseConfig'
import { ParamsType } from './type'

/**
 * console.error异常
 */
class ConsoleError extends BaseMonitor {
  constructor(params: ParamsType) {
    super(params)
  }

  /**
   * 处理console事件
   */
  handleError() {
    this.registerInfo()
    this.registerWarn()
    this.registerError()
  }

  /**
   * 处理信息
   */
  registerInfo() {
    let t = this
    ;(console as any).tInfo = function () {
      t.handleLog(
        ErrorLevelEnum.INFO,
        ErrorCategoryEnum.CONSOLE_INFO,
        arguments
      )
    }
  }

  /**
   * 处理警告
   */
  registerWarn() {
    let t = this
    ;(console as any).tWarn = function () {
      t.handleLog(
        ErrorLevelEnum.WARN,
        ErrorCategoryEnum.CONSOLE_WARN,
        arguments
      )
    }
  }

  /**
   * 处理错误
   */
  registerError() {
    let t = this
    ;(console as any).tError = function () {
      t.handleLog(
        ErrorLevelEnum.ERROR,
        ErrorCategoryEnum.CONSOLE_ERROR,
        arguments
      )
    }
  }

  /**
   * 处理日志
   */
  handleLog(level: string, category: string, args: IArguments) {
    try {
      this.level = level
      let params = [...args]
      this.msg = params.join('\r\n') // 换行符分割
      this.url = location.href // 当前地址
      this.category = category
      this.recordError()
    } catch (error) {
      console.log('console统计错误异常', level, error)
    }
  }
}

/**
 * 初始化console事件
 */
;(function () {
  // 创建空console对象，避免JS报错
  if (!window.console) {
    ;(window as any).console = {}
  }
  let funcs = ['tInfo', 'tWarn', 'tError']
  funcs.forEach((func) => {
    if (!(console as any)[func]) {
      ;(console as any)[func] = function () {}
    }
  })
})()

export default ConsoleError
