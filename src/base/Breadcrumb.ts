/*
 * @Author: 杨宏旋
 * @Date: 2021-07-20 17:55:46
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-12-23 09:57:54
 * @Description:
 */
import { CategoryEnum } from '../enum'

interface BreadcrumbPushData {
  /**
   * 事件类型
   */
  category: CategoryEnum
  data: any
}

export default class Breadcrumb {
  maxBreadcrumbs = 10
  beforePushBreadcrumb: unknown = null
  stack: BreadcrumbPushData[] = []
  constructor() {}
  /**
   * 添加用户行为栈
   * ../param {BreadcrumbPushData} data
   * ../memberof Breadcrumb
   */
  push(data: BreadcrumbPushData): void {
    // if (typeof this.beforePushBreadcrumb === 'function') {
    //   let result: BreadcrumbPushData = null
    //   // 如果用户输入console，并且logger是打开的会造成无限递归，
    //   // 应该加入一个开关，执行这个函数前，把监听console的行为关掉
    //   const beforePushBreadcrumb = this.beforePushBreadcrumb
    //   slientConsoleScope(() => {
    //     result = beforePushBreadcrumb(this, data)
    //   })
    //   if (!result) return
    //   this.immediatePush(result)
    //   return
    // }
    this.immediatePush(data)
  }
  immediatePush(data: BreadcrumbPushData): void {
    data.time || (data.time = Date.now())
    if (this.stack.length >= this.maxBreadcrumbs) {
      this.shift()
    }
    this.stack.push(data)
    // make sure xhr fetch is behind button click
    this.stack.sort(
      (a: BreadcrumbPushData, b: BreadcrumbPushData) => a.time - b.time
    )
  }
  shift(): boolean {
    return this.stack.shift() !== undefined
  }
  clear(): void {
    this.stack = []
  }
  getStack(): BreadcrumbPushData[] {
    return this.stack
  }
}
