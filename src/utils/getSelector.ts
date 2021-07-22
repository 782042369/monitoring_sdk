/* eslint-disable no-undef */
import { isArray } from '.'

/*
 * @Author: 杨宏旋
 * @Date: 2020-05-31 22:47:24
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-22 11:17:03
 * @Description:
 */
function getSelectors(path: any) {
  return path
    .reverse()
    .filter((element: (Window & typeof globalThis) | Document) => {
      return element !== document && element !== window
    })
    .map((element: { id: string; nodeName: string; className: string }) => {
      let selector = ''
      if (element.id) {
        return `${element.nodeName.toLowerCase()}#${element.id}`
      } else if (element.className && typeof element.className === 'string') {
        return `${element.nodeName.toLowerCase()}.${element.className}`
      } else {
        selector = element.nodeName.toLowerCase()
      }
      return selector
    })
    .join(' ')
}
export default function (pathsOrTarget: any) {
  if (isArray(pathsOrTarget)) {
    // 可能是一个数组
    return getSelectors(pathsOrTarget)
  } else {
    // 也有可有是一个对象
    const path = []
    while (pathsOrTarget) {
      path.push(pathsOrTarget)
      pathsOrTarget = pathsOrTarget.parentNode
    }
    return getSelectors(path)
  }
}
