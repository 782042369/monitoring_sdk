import BaseMonitor from '../base/baseMonitor';
declare class MonitorPerformance extends BaseMonitor {
    isPage: any;
    isResource: any;
    usefulType: string[];
    outTime: number;
    config: any;
    pageId: any;
    constructor(options: any);
    /**
     * 获取需要上报资源数据类型
     * @param {*} options
     */
    getSourceType(options: any): string[];
    /**
     * 记录页面信息
     * @param {*} options  {pageId ：页面标示,url ：上报地址}
     */
    record(): void;
    randomString(len?: number): string;
    /**
     * 获得markpage
     */
    markUser(): string;
    /**
     * 获得Uv
     */
    markUv(): string;
    clearPerformance(): void;
}
export default MonitorPerformance;
