import { ITimestamp } from '../timestamp.interface';
import { IOrder } from './order.interface';
export interface IOrderBilling extends ITimestamp {
    order: IOrder;
    name: string;
    customer_uid?: string;
    billkey: string;
    version: number;
}
