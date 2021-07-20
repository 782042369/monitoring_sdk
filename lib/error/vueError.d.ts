import BaseMonitor from '../base/baseMonitor';
/**
 * vue错误
 */
declare class VueError extends BaseMonitor {
    constructor(params: {
        reportUrl: string;
        extendsInfo: any;
    });
    /**
     * 处理Vue错误提示
     */
    handleError(Vue: any): void;
}
export default VueError;
