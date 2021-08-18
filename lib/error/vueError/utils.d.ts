import { ViewModel } from 'types';
export declare function vue3VmHandler(vm: ViewModel): {
    componentName: string;
    propsData: Record<string, unknown>;
};
export declare function vue2VmHandler(vm: ViewModel): {
    componentName: string;
    propsData: import("types").DataProps | undefined;
};
export declare function getBigVersion(version: string): number;
