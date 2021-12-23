import { OptionsType, DataProps } from '../types';
import { ErrorCategoryEnum } from '../enum';
interface QueueProps {
    isStop: boolean;
    queues: {
        reportUrl: OptionsType['reportUrl'];
        data: {
            category: ErrorCategoryEnum;
            device: string;
            appID: OptionsType['appID'];
            url: string;
            log: string;
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
