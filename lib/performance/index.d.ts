import BaseMonitor from '../base/baseMonitor';
import { OptionsType } from '../types';
declare class MonitorPerformance extends BaseMonitor {
    isPage: any;
    isResource: any;
    usefulType: string[];
    outTime: number;
    config: any;
    constructor(options: OptionsType);
    /**
     * 获取需要上报资源数据类型
     * @param {*} options
     */
    getSourceType(options: {
        isRScript?: boolean;
        isRCSS?: boolean;
        isRLink?: boolean;
        isRIMG?: boolean;
    }): string[];
    /**
     * 记录页面信息
     * @param {*} options  {pageId ：页面标示,url ：上报地址}
     */
    record(): void;
    clearPerformance(): void;
}
export default MonitorPerformance;
