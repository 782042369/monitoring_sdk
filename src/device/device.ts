/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 16:36:31
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-08-18 15:40:06
 * @Description:
 */
import MethodLibrary from './MethodLibrary'
import { DataProps } from 'types'

const DeviceInfo = (() => {
  // 逻辑层
  const LogicLibrary = (() => {
    return {
      DeviceInfoObj(params: { domain: any; info?: any }) {
        params = params || { domain: '' }
        const info: Record<string, number | string | DataProps> = {
          deviceType: MethodLibrary.getDeviceType(), // 设备类型
          OS: MethodLibrary.getOS(), // 操作系统
          OSVersion: MethodLibrary.getOSVersion(), // 操作系统版本
          screenHeight: window.screen.height, // 屏幕高
          screenWidth: window.screen.width, // 屏幕宽
          language: MethodLibrary.getLanguage(), // 当前使用的语言-国家
          netWork: MethodLibrary.getNetwork(), // 联网类型
          orientation: MethodLibrary.getOrientationStatu(), // 横竖屏
          browserInfo: MethodLibrary.getBrowserInfo(), // 浏览器信息
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
