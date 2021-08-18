/*
 * @Author: 杨宏旋
 * @Date: 2021-07-19 16:25:42
 * @LastEditors: 杨宏旋
 * @LastEditTime: 2021-07-22 15:05:39
 * @Description:
 */

import { DataProps } from 'types'

export function checkUrl(url: string | undefined): boolean {
  if (!url) {
    return false
  }
  const urlRule =
    /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/
  return urlRule.test(url)
}
function type(obj: DataProps) {
  return Object.prototype.toString.call(obj).replace(/\[object\s|\]/g, '')
}

export function isFunction(func: DataProps) {
  return type(func) === 'Function'
}

export function isArray(list: DataProps) {
  return type(list) === 'Array'
}
export function isString(list: DataProps) {
  return type(list) === 'String'
}
export function isUndefined(list: DataProps) {
  return type(list) === 'Undefined'
}
/**
 * 是否为null
 * @param {String} str
 */
export function isNull(str: string) {
  return str === undefined || str === '' || str === null
}

/**
 * 对象是否为空
 * @param {*} obj
 */
export function objectIsNull(obj: DataProps) {
  return JSON.stringify(obj) === '{}'
}

/**
 * 是否是对象
 * @param {*} obj
 */
export function isObject(obj: DataProps) {
  return type(obj) === 'Object'
}
export class MyDate extends Date {
  constructor() {
    super()
  }
  format(fmt: string) {
    const o: DataProps = {
      'M+': this.getMonth() + 1, // 月份
      'd+': this.getDate(), // 日
      'h+': this.getHours() % 12 === 0 ? 12 : this.getHours() % 12, // 小时
      'H+': this.getHours(), // 小时
      'm+': this.getMinutes(), // 分
      's+': this.getSeconds(), // 秒
      'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
      S: this.getMilliseconds(), // 毫秒
    }
    const week: DataProps = {
      '0': '/u65e5',
      '1': '/u4e00',
      '2': '/u4e8c',
      '3': '/u4e09',
      '4': '/u56db',
      '5': '/u4e94',
      '6': '/u516d',
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        `${String(this.getFullYear())}`.substr(4 - RegExp.$1.length)
      )
    }
    if (/(E+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (RegExp.$1.length > 1
          ? RegExp.$1.length > 2
            ? '/u661f/u671f'
            : '/u5468'
          : '') + week[`${String(this.getDay())}`]
      )
    }
    for (const k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1
            ? o[k]
            : `00${o[k]}`.substr(`${String(o[k])}`.length)
        )
      }
    }
    return fmt
  }
}
export function getLocationHref() {
  if (typeof document === 'undefined' || document.location === null) return ''
  return document.location.href
}
export function randomString(len: number = 10) {
  const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789'
  const maxPos = $chars.length
  let pwd = ''
  for (let i = 0; i < len; i++) {
    pwd = pwd + $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd + new Date().getTime()
}

/**
 * 获得markpage
 */
export function markUser() {
  let psMarkUser = localStorage.getItem('ps_markUser') || ''
  if (!psMarkUser) {
    psMarkUser = randomString()
    localStorage.setItem('ps_markUser', psMarkUser)
  }
  return psMarkUser
}

/**
 * 获得Uv
 */
export function markUv() {
  const date = new MyDate()
  let psMarkUv = localStorage.getItem('ps_markUv') || ''
  const datatime: any = localStorage.getItem('ps_markUvTime') || ''
  const today = date.format('yyyy/MM/dd 23:59:59')
  if ((!psMarkUv && !datatime) || date.getTime() > datatime * 1) {
    psMarkUv = randomString()
    localStorage.setItem('ps_markUv', psMarkUv)
    localStorage.setItem(
      'ps_markUvTime',
      JSON.stringify(new Date(today).getTime())
    )
  }
  return psMarkUv
}
