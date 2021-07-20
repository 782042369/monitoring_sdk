/*
 * @Author: 杨宏旋
 * @Date: 2020-05-31 22:47:24
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-20 13:19:24
 * @Description:
 */
let lastEvent: Event
;['click', 'touchstart', 'mousedown', 'keydown', 'mouseover'].forEach(
  (eventType) => {
    document.addEventListener(
      eventType,
      (event) => {
        lastEvent = event
      },
      {
        capture: true, // 捕获阶段
        passive: true, // 默认不阻止默认事件
      }
    )
  }
)
export default function () {
  return lastEvent
}
