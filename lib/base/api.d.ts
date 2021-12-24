import { DataProps, OptionsType } from '../types';
import { CategoryEnum } from './../enum/index';
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
        category: CategoryEnum;
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
    /**
     * 通过img方式上报信息
     */
    reportByImg(data: {
        category: CategoryEnum;
        device: string;
        appID: OptionsType['appID'];
        url: string;
        log: string;
        markUser: string;
        markUv: string;
        first: number;
    }): void;
    formatParams(data: DataProps): string;
}
export default API;
