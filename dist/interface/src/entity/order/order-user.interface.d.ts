import { ITimestamp } from '../timestamp.interface';
import { IOrder } from './order.interface';
export interface IOrderUser extends ITimestamp {
    order: IOrder;
    name: string;
    phoneNumber: string;
    email: string;
}
