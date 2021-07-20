import BaseMonitor from '../base/baseMonitor';
import type { ParamsType } from './type';
/**
 * 捕获未处理的Promise异常
 */
declare class PromiseError extends BaseMonitor {
    constructor(params: ParamsType);
    /**
     * 处理错误
     */
    handleError(): void;
}
export default PromiseError;
