import { OptionsType, DataProps } from '../types';
import { CategoryEnum } from '../enum';
interface QueueProps {
    isStop: boolean;
    queues: {
        reportUrl: OptionsType['reportUrl'];
        data: {
            category: CategoryEnum;
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
