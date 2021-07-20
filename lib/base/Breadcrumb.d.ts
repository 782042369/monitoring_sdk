import { ErrorCategoryEnum, ErrorLevelEnum } from '../enum';
interface BreadcrumbPushData {
    /**
     * 事件类型
     */
    category: ErrorCategoryEnum;
    data: any;
    time: number;
    level: ErrorLevelEnum;
}
export default class Breadcrumb {
    maxBreadcrumbs: number;
    beforePushBreadcrumb: unknown;
    stack: BreadcrumbPushData[];
    constructor();
    /**
     * 添加用户行为栈
     * ../param {BreadcrumbPushData} data
     * ../memberof Breadcrumb
     */
    push(data: BreadcrumbPushData): void;
    immediatePush(data: BreadcrumbPushData): void;
    shift(): boolean;
    clear(): void;
    getStack(): BreadcrumbPushData[];
}
export {};
