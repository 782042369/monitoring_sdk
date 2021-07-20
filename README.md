<!--
 * @Author: 杨宏旋
 * @Date: 2021-07-20 13:42:44
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-20 13:43:51
 * @Description:
-->

# 监控 sdk

```
  VUE
  new MonitorJS().init({
    appID: '1111',
    url: 'http://baidu.com/api', //上报错误地址
    vueError: true, // 是否上报Vue错误
    vue: Vue,
    isPage: true,
    isResource: true,
  })
  JS
    new MonitorJS().init({
    appID: '1111',
    url: 'http://baidu.com/api', //上报错误地址
    isPage: true,
    isResource: true,
  })
```
