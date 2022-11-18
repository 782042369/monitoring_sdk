import { DataProps } from '../types';
/**
 * 页面监控
 */
declare const pagePerformance: {
    getTiming(): DataProps | undefined;
    getEntries(usefulType: any[] | undefined, url: string): {
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
    }[] | undefined;
};
export default pagePerformance;
