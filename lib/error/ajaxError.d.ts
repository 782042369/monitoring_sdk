import { ParamsType } from '../types';
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
    handleError(): void;
}
export default AjaxError;
