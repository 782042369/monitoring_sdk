import BaseMonitor from '../base/baseMonitor';
/**
 * 捕获JS错误
 */
declare class JSError extends BaseMonitor {
    constructor(params: {
        reportUrl: string;
        extendsInfo: any;
    });
    /**
     * 注册onerror事件
     */
    handleError(): void;
}
export default JSError;
