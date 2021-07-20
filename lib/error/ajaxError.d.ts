/**
 * ajax error异常
 */
declare class AjaxError {
    params: {
        reportUrl: string;
        extendsInfo: {};
    };
    constructor(params: {
        reportUrl: string;
        extendsInfo: {};
    });
    /**
     * 处理错误
     * @param type {*} ajax库类型
     * @param error{*} 错误信息
     */
    handleError(type: string, err?: any): void;
}
export default AjaxError;
