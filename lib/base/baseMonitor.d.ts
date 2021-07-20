import { ObjectProps } from './typpe';
/**
 * 监控基类
 */
declare class BaseMonitor {
    category: string;
    level: string;
    msg: string;
    url: string;
    line: string;
    col: string;
    errorObj: ObjectProps;
    reportUrl: string;
    extendsInfo: Record<string, any>;
    appID: string;
    selector: string;
    /**
     * 上报错误地址
     * @param {*} params { reportUrl,extendsInfo }
     */
    constructor(params: {
        reportUrl: string;
        extendsInfo: Record<string, any>;
        appID: string;
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
    handleErrorInfo(): ObjectProps;
    /**
     * 获取扩展信息
     */
    getExtendsInfo(): ObjectProps;
    /**
     * 获取设备信息
     */
    getDeviceInfo(): string;
}
export default BaseMonitor;
