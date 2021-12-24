/**
 * 日志类型枚举
 */
export declare enum CategoryEnum {
    /**
     * js 日志
     */
    'JS' = "js",
    /**
     * 资源引用日志
     */
    'RESOURCE' = "resource",
    /**
     * Vue日志
     */
    'VUE' = "vue",
    /**
     * promise 日志
     */
    'PROMISE' = "promise",
    /**
     * ajax异步请求日志
     */
    'AJAX' = "ajax",
    /**
     * 跨域js日志
     */
    'CROSS_SCRIPT' = "cross_srcipt",
    /**
     * 未知异常
     */
    'UNKNOW' = "unknow",
    /**
     * 性能上报
     */
    'PERFORMANCE' = "performance"
}
/**
 * Ajax库枚举
 */
export declare enum AjaxLibEnum {
    'XHR' = "xhr",
    'FETCH' = "fetch"
}
/**
 * Ajax请求方式枚举
 */
export declare enum AjaxMethodEnum {
    'GET' = "get",
    'POST' = "post",
    'DELETE' = "delete",
    'PUT' = "put"
}
