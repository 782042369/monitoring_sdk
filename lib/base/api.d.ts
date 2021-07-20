import { DataProps } from './typpe';
/**
 * 数据持久化
 */
declare class API {
    url: string;
    constructor(url: string);
    /**
     * 上报信息 （默认方式）
     * isFetch ：是否优先通过fetch上报
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
    /**
     * sendBeacon上报
     */
    reportByNavigator(data: DataProps): void;
    formatParams(data: {
        [x: string]: any;
    }): string;
}
export default API;
