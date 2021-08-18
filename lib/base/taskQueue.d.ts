import { OptionsType, DataProps } from 'types';
import { ErrorCategoryEnum, ErrorLevelEnum } from '../enum';
interface QueueProps {
    isStop: boolean;
    queues: {
        reportUrl: OptionsType['reportUrl'];
        data: {
            category: ErrorCategoryEnum;
            level: ErrorLevelEnum;
            deviceInfo: string;
            appID: OptionsType['appID'];
            time: number;
            url: string;
            logInfo: string;
            markUser: string;
            markUv: string;
        };
    }[];
    add(reportUrl: OptionsType['reportUrl'], data: DataProps): void;
    fire(): void;
}
/**
 * 消息队列
 */
declare const TaskQueue: QueueProps;
export default TaskQueue;
