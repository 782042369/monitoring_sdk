import { DataProps } from '../types';
/**
 * 数据持久化
 */
declare class API {
    reportUrl: string;
    constructor(reportUrl: string);
    /**
     * 上报信息 （默认方式）
     */
    report(data: DataProps): void;
    /**
     * 发送消息
     */
    sendInfo(data: DataProps): void;
    /**
     * 通过img方式上报信息
     */
    reportByImg(data: DataProps): void;
    formatParams(data: DataProps): string;
}
export default API;
