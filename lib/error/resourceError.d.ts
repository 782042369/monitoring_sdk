import BaseMonitor from '../base/baseMonitor';
import { ParamsType } from 'types';
/**
 * 资源加载错误
 */
declare class ResourceError extends BaseMonitor {
    constructor(params: ParamsType);
    /**
     * 注册onerror事件
     */
    handleError(): void;
}
export default ResourceError;
