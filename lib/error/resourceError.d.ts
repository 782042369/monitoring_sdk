import BaseMonitor from '../base/baseMonitor';
/**
 * 资源加载错误
 */
declare class ResourceError extends BaseMonitor {
    constructor(params: {
        reportUrl: string;
        extendsInfo: any;
    });
    /**
     * 注册onerror事件
     */
    handleError(): void;
}
export default ResourceError;
