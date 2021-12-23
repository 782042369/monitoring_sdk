import { ErrorCategoryEnum } from '../enum';
import { OptionsType, DataProps } from '../types';
/**
 * 监控基类
 */
declare class BaseMonitor {
    category: ErrorCategoryEnum;
    msg: string;
    url: string;
    line: string;
    col: string;
    errorObj: DataProps;
    reportUrl: OptionsType['reportUrl'];
    extendsInfo: OptionsType['extendsInfo'];
    appID: OptionsType['appID'];
    userID?: OptionsType['userID'];
    /**
     * 上报错误地址
     * @param {*} params { reportUrl,extendsInfo }
     */
    constructor(params: {
        reportUrl: OptionsType['reportUrl'];
        extendsInfo: OptionsType['extendsInfo'];
        appID: OptionsType['appID'];
        userID?: OptionsType['appID'];
    });
    /**
     * 记录错误信息
     */
    recordError(): void;
    /**
     * 处理记录日志
     */
    handleRecordError(): void;
    /**
     * 处理错误信息
     * @param {*} extendsInfo
     */
    handleErrorInfo(): {
        category: string;
        device: string;
        appID: string;
        url: string;
        log: string;
        markUser: string | number;
        markUv: string;
        selector?: string | undefined;
        preUrl?: string | undefined;
    };
    /**
     * 获取扩展信息
     */
    getExtendsInfo(): DataProps;
    /**
     * 获取设备信息
     */
    getDeviceInfo(): string;
}
export default BaseMonitor;
