import { DataProps } from 'src/types';
declare const DeviceInfo: {
    getDeviceInfo(params?: any): Record<string, string | number | DataProps>;
};
export default DeviceInfo;
