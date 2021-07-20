/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 16:36:31
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-20 11:00:59
 * @Description:
 */
import VariableLibrary from './VariableLibrary'
import MethodLibrary from './MethodLibrary'

const DeviceInfo = (() => {
  // 逻辑层
  const LogicLibrary = (() => {
    return {
      DeviceInfoObj(params: { domain: any; info?: any }) {
        params = params || { domain: '' }
        const info: Record<string, number | string> = {
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
          userAgent: VariableLibrary.navigator.userAgent, // 包含 appCodeName,appName,appVersion,language,platform 等
        }
        if (!params.info || params.info.length === 0) {
          return info
        }
        const infoTemp: Record<string, number | string> = {}
        for (const i in info) {
          params.info.forEach(function (item: string) {
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
