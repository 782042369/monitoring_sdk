import BaseMonitor from '../base/baseMonitor';
import type { ParamsType } from './type';
/**
 * vue错误
 */
declare class VueError extends BaseMonitor {
    constructor(params: ParamsType);
    /**
     * 处理Vue错误提示
     */
    handleError(Vue: any): void;
}
export default VueError;
