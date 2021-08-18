import { OptionsType } from 'types';
declare class MonitorJS {
    jsError: boolean;
    promiseError: boolean;
    resourceError: boolean;
    ajaxError: boolean;
    vueError: boolean;
    constructor();
    /**
     * 处理异常信息初始化
     * @param {OptionsType} options
     */
    init(options: OptionsType): void;
    /**
     * 监听页面性能
     * @param {OptionsType} options {pageId：页面标示,url：上报地址}
     */
    monitorPerformance(options: OptionsType): void;
}
export default MonitorJS;
