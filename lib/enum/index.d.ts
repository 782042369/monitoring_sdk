/**
 * 错误类型枚举
 */
export declare enum ErrorCategoryEnum {
    /**
     * js 错误
     */
    'JS_ERROR' = "js_error",
    /**
     * 资源引用错误
     */
    'RESOURCE_ERROR' = "resource_error",
    /**
     * Vue错误
     */
    'VUE_ERROR' = "vue_error",
    /**
     * promise 错误
     */
    'PROMISE_ERROR' = "promise_error",
    /**
     * ajax异步请求错误
     */
    'AJAX_ERROR' = "ajax_error",
    /**
     * 跨域js错误
     */
    'CROSS_SCRIPT_ERROR' = "cross_srcipt_error",
    /**
     * 未知异常
     */
    'UNKNOW_ERROR' = "unknow_error",
    /**
     * 性能上报
     */
    'PERFORMANCE' = "performance"
}
/**
 * 错误level枚举
 */
export declare enum ErrorLevelEnum {
    /**
     * 错误信息
     */
    'ERROR' = "Error",
    /**
     * 警告信息
     */
    'WARN' = "Warning",
    /**
     * 日志信息
     */
    'INFO' = "Info",
    /**
     * 用户自定义事件
     */
    'Custom' = "Custom"
}
/**
 * Ajax库枚举
 */
export declare enum AjaxLibEnum {
    'AXIOS' = "axios",
    'DEFAULT' = "default"
}
