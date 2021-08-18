import { DataProps, OptionsType } from 'types';
import { ErrorLevelEnum, ErrorCategoryEnum } from './../enum/index';
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
        level: ErrorLevelEnum;
        deviceInfo: string;
        appID: OptionsType['appID'];
        time: number;
        url: string;
        logInfo: string;
        markUser: string;
        markUv: string;
    }): void;
    /**
     * 发送消息
     */
    sendInfo(data: {
        category: ErrorCategoryEnum;
        level: ErrorLevelEnum;
        deviceInfo: string;
        appID: OptionsType['appID'];
        time: 1627297413007;
        url: string;
        logInfo: string;
        markUser: string;
        markUv: string;
    }): void;
    /**
     * 通过img方式上报信息
     */
    reportByImg(data: {
        category: ErrorCategoryEnum;
        level: ErrorLevelEnum;
        deviceInfo: string;
        appID: OptionsType['appID'];
        time: number;
        url: string;
        logInfo: string;
        markUser: string;
        markUv: string;
    }): void;
    formatParams(data: DataProps): string;
}
export default API;
