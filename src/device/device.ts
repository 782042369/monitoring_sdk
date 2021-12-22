/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 16:36:31
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-12-22 17:29:20
 * @Description:
 */
import MethodLibrary from './MethodLibrary'
import { DataProps } from '../types'

const DeviceInfo = (() => {
  // 逻辑层
  const LogicLibrary = (() => {
    return {
      DeviceInfoObj(params: { domain: any; info?: any }) {
        params = params || { domain: '' }
        const info: Record<string, number | string | DataProps> = {
          type: MethodLibrary.getDeviceType(), // 设备类型
          os: MethodLibrary.getOS(), // 操作系统
          osv: MethodLibrary.getOSVersion(), // 操作系统版本
          h: window.screen.height, // 屏幕高
          w: window.screen.width, // 屏幕宽
          lan: MethodLibrary.getLanguage(), // 当前使用的语言-国家
          net: MethodLibrary.getNetwork(), // 联网类型
          orientation: MethodLibrary.getOrientationStatu(), // 横竖屏
          browser: MethodLibrary.getBrowserInfo(), // 浏览器信息
          fingerprint: MethodLibrary.createFingerprint(params.domain), // 浏览器指纹
        }
        if (!params.info || params.info.length === 0) {
          return info
        }
        const infoTemp: Record<string, number | string | DataProps> = {}
        for (const i in info) {
          params.info.forEach((item: string) => {
            if (item.toLowerCase() === i.toLowerCase()) {
              item = i
              infoTemp[item] = info[item]
            }
          })
        }
        return infoTemp
      },
    }
  })()
  // 对外暴露方法
  return {
    getDeviceInfo(params?: any) {
      return LogicLibrary.DeviceInfoObj(params)
    },
  }
})()

export default DeviceInfo
