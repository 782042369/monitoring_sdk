/**
 * 错误类型枚举
 */
export declare class ErrorCategoryEnum {
    /**
     * js 错误
     */
    static get JS_ERROR(): string;
    /**
     * 资源引用错误
     */
    static get RESOURCE_ERROR(): string;
    /**
     * Vue错误
     */
    static get VUE_ERROR(): string;
    /**
     * promise 错误
     */
    static get PROMISE_ERROR(): string;
    /**
     * ajax异步请求错误
     */
    static get AJAX_ERROR(): string;
    /**
     * 跨域js错误
     */
    static get CROSS_SCRIPT_ERROR(): string;
    /**
     * 未知异常
     */
    static get UNKNOW_ERROR(): string;
    /**
     * 性能上报
     */
    static get PERFORMANCE(): string;
    /**
     * 接口请求速度上报
     */
    static get NETWORK_SPEED(): string;
}
/**
 * 错误level枚举
 */
export declare class ErrorLevelEnum {
    /**
     * 错误信息
     */
    static get ERROR(): string;
    /**
     * 警告信息
     */
    static get WARN(): string;
    /**
     * 日志信息
     */
    static get INFO(): string;
}
/**
 * Ajax库枚举
 */
export declare class AjaxLibEnum {
    static get AXIOS(): string;
    static get DEFAULT(): string;
}
