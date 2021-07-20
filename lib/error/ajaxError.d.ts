import type { ParamsType } from './type';
/**
 * ajax error异常
 */
declare class AjaxError {
    params: ParamsType;
    constructor(params: ParamsType);
    /**
     * 处理错误
     * @param type {*} ajax库类型
     * @param error{*} 错误信息
     */
    handleError(type: string, err?: any): void;
}
export default AjaxError;
