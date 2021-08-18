import BaseMonitor from '../base/baseMonitor';
import { ParamsType } from 'types';
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
