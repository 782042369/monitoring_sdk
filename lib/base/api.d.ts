import { DataProps, OptionsType } from '../types';
import { ErrorCategoryEnum } from './../enum/index';
/**
 * 数据持久化
 */
declare class API {
    reportUrl: string;
    constructor(reportUrl: string);
    /**
     * 上报信息 （默认方式）
     */
    report(data: {
        category: ErrorCategoryEnum;
        device: string;
        appID: OptionsType['appID'];
        url: string;
        log: string;
        markUser: string;
        markUv: string;
    }): void;
    /**
     * 发送消息
     */
    sendInfo(data: {
        category: ErrorCategoryEnum;
        device: string;
        appID: OptionsType['appID'];
        url: string;
        log: string;
        markUser: string;
        markUv: string;
    }): void;
    /**
     * 通过img方式上报信息
     */
    reportByImg(data: {
        category: ErrorCategoryEnum;
        device: string;
        appID: OptionsType['appID'];
        url: string;
        log: string;
        markUser: string;
        markUv: string;
    }): void;
    formatParams(data: DataProps): string;
}
export default API;
