import { DataProps } from '../types';
export declare function checkUrl(url: string | undefined): boolean;
export declare function isFunction(func: DataProps): boolean;
export declare function isArray(list: DataProps): boolean;
export declare function isString(list: DataProps): boolean;
export declare function isUndefined(list: DataProps): boolean;
/**
 * 是否为null
 * @param {String} str
 */
export declare function isNull(str: string): boolean;
/**
 * 对象是否为空
 * @param {*} obj
 */
export declare function objectIsNull(obj: DataProps): boolean;
/**
 * 是否是对象
 * @param {*} obj
 */
export declare function isObject(obj: DataProps): boolean;
export declare class MyDate extends Date {
    constructor();
    format(fmt: string): string;
}
export declare function getLocationHref(): string;
export declare function randomString(len?: number): string;
/**
 * 获得markpage
 */
export declare function markUser(userID?: string | number): string;
/**
 * 获得Uv
 */
export declare function markUv(): string;
/**
 *
 * @returns 进入应用首次流量标识
 */
export declare function firstIn(): number;
/**
 *
 * @returns 获取横竖屏状态
 */
export declare function getOrientationStatu(): string;
/**
 *
 * @returns 获取网络状态
 */
export declare function getNetwork(): string;
/**
 *
 * @returns 获取当前语言
 */
export declare function getLanguage(): string;
/**
 *
 * @returns 生成浏览器指纹
 */
export declare function createFingerprint(): string;
