import BaseMonitor from '../base/baseMonitor';
import { OptionsType, DataProps } from '../types';
declare class MonitorPerformance extends BaseMonitor {
    isPage: boolean;
    isResource: boolean;
    usefulType: string[];
    outTime: number;
    config: {
        resourceList: Array<{
            name: string;
            initiatorType: string;
            nextHopProtocol: string;
            redirectTime: string;
            dnsTime: string;
            tcpTime: string;
            ttfbTime: string;
            responseTime: string;
            reqTotalTime: string;
            decodedBodySize: number;
        }>;
        performance: DataProps;
    };
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
