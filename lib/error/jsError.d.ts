import BaseMonitor from '../base/baseMonitor';
import type { ParamsType } from './type';
/**
 * 捕获JS错误
 */
declare class JSError extends BaseMonitor {
    constructor(params: ParamsType);
    /**
     * 注册onerror事件
     */
    handleError(): void;
}
export default JSError;
