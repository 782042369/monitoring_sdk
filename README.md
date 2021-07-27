<!--
 * @Author: 杨宏旋
 * @Date: 2021-07-20 13:42:44
 * @LastEditors: yanghongxuan
 * @LastEditTime: 2021-07-27 10:26:05
 * @Description:
-->

# 监控 sdk

```
  VUE
  new MonitorJS().init({
    appID: 'zZQpe1627352687237',
    url: 'http://127.0.0.1:7070/api', //上报错误地址
    vueError: true, // 是否上报Vue错误
    vue: Vue,
    isPage: true,
    isResource: true,
  })
  JS
    new MonitorJS().init({
    appID: 'zZQpe1627352687237',
    url: 'http://127.0.0.1:7070/api', //上报错误地址
    isPage: true,
    isResource: true,
  })
```
