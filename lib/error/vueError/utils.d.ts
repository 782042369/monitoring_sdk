import { ViewModel } from './type';
export declare function vue3VmHandler(vm: ViewModel): {
    componentName: string;
    propsData: Record<string, unknown>;
};
export declare function vue2VmHandler(vm: ViewModel): {
    componentName: string;
    propsData: import("./type").IAnyObject | undefined;
};
export declare function getBigVersion(version: string): number;
