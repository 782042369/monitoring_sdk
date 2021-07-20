import BaseMonitor from '../base/baseMonitor';
declare class MonitorPerformance extends BaseMonitor {
    isPage: any;
    isResource: any;
    usefulType: string[];
    outTime: number;
    config: any;
    constructor(options: {
        isPage: boolean;
        isResource: boolean;
        url: string;
        appID: string;
        jsError?: boolean;
        promiseError?: boolean;
        resourceError?: boolean;
        ajaxError?: boolean;
        vueError?: boolean;
        vue?: boolean;
        extendsInfo: Record<string, any>;
    });
    /**
     * 获取需要上报资源数据类型
     * @param {*} options
     */
    getSourceType(options: {
        isPage?: boolean;
        isResource?: boolean;
        url?: string;
        appID?: string;
        jsError?: boolean | undefined;
        promiseError?: boolean | undefined;
        resourceError?: boolean | undefined;
        ajaxError?: boolean | undefined;
        vueError?: boolean | undefined;
        vue?: boolean | undefined;
        extendsInfo?: Record<string, any>;
        isRScript?: any;
        isRCSS?: any;
        isRFetch?: any;
        isRXHR?: any;
        isRLink?: any;
        isRIMG?: any;
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
