/**
 * 页面监控
 */
declare const pagePerformance: {
    getTiming(): Record<string, any> | undefined;
    getEntries(usefulType?: any[]): Record<string, any>[] | undefined;
};
export default pagePerformance;
