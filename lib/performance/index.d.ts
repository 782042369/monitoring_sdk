import BaseMonitor from '../base/baseMonitor';
import { OptionsType } from '../type';
import { DataProps } from '../type';
declare class MonitorPerformance extends BaseMonitor {
    isPage: any;
    isResource: any;
    usefulType: string[];
    outTime: number;
    config: any;
    constructor(options: {
        reportUrl: OptionsType['reportUrl'];
        extendsInfo: OptionsType['extendsInfo'];
        appID: OptionsType['appID'];
        isPage: OptionsType['isPage'];
        isResource: OptionsType['isResource'];
    });
    /**
     * 获取需要上报资源数据类型
     * @param {*} options
     */
    getSourceType(options: {
        reportUrl: OptionsType['reportUrl'];
        appID: OptionsType['appID'];
        extendsInfo?: DataProps;
        isPage?: boolean;
        isResource?: boolean;
        isRScript?: boolean;
        isRCSS?: boolean;
        isRFetch?: any;
        isRXHR?: boolean;
        isRLink?: boolean;
        isRIMG?: boolean;
    }): string[];
    /**
     * 记录页面信息
     * @param {*} options  {pageId ：页面标示,url ：上报地址}
     */
    record(): void;
    randomString(len?: number | undefined): string;
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
