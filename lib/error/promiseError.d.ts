import BaseMonitor from '../base/baseMonitor';
/**
 * 捕获未处理的Promise异常
 */
declare class PromiseError extends BaseMonitor {
    constructor(params: {
        reportUrl: string;
        extendsInfo: any;
    });
    /**
     * 处理错误
     */
    handleError(): void;
}
export default PromiseError;
