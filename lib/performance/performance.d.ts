import { DataProps } from '../type';
/**
 * 页面监控
 */
declare const pagePerformance: {
    getTiming(): DataProps | undefined;
    getEntries(usefulType?: any[]): DataProps[] | undefined;
};
export default pagePerformance;
