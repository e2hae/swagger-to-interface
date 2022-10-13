import { ITimestamp } from '../timestamp.interface';
import { IOrder } from './order.interface';
export interface IOrderAddress extends ITimestamp {
    order: IOrder;
    name: string;
    phoneNumber: string;
    zipcode: string;
    address: string;
    detailAddress?: string;
    deliveryMessage?: string;
}
