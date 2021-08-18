import { ParamsType } from 'types';
import BaseMonitor from '../../base/baseMonitor';
declare class VueError extends BaseMonitor {
    constructor(params: ParamsType);
    /**
     * 处理Vue错误提示
     */
    handleError(Vue: any): void;
}
export default VueError;
