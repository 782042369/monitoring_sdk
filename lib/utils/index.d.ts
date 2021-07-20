export declare function checkUrl(url: string | undefined): boolean;
export declare function isFunction(func: any): boolean;
export declare function isArray(list: any): boolean;
export declare function isString(list: any): boolean;
export declare function isUndefined(list: any): boolean;
/**
 * 是否为null
 * @param {String} str
 */
export declare function isNull(str: string): boolean;
/**
 * 对象是否为空
 * @param {*} obj
 */
export declare function objectIsNull(obj: any): boolean;
/**
 * 是否是对象
 * @param {*} obj
 */
export declare function isObject(obj: any): boolean;
export declare class MyDate extends Date {
    constructor();
    format(fmt: string): string;
}
export declare function getLocationHref(): string;
