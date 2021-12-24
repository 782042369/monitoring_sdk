import { DataProps } from '../types';
/**
 * 页面监控
 */
declare const pagePerformance: {
    getTiming(): DataProps | undefined;
    getEntries(usefulType: any[] | undefined, url: string): DataProps[] | undefined;
};
export default pagePerformance;
