import { DataProps } from './typpe';
interface QueueProps {
    isStop: boolean;
    queues: {
        reportUrl: string;
        data: DataProps;
    }[];
    add(reportUrl: string, data: DataProps): void;
    fire(): void;
}
/**
 * 消息队列
 */
declare let TaskQueue: QueueProps;
export default TaskQueue;
