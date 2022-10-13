import { ITimestamp } from '../timestamp.interface';
import { IOrder } from './order.interface';
import { IPurchaseProduct } from './purchase-product.inteface';
export interface IPurchase extends ITimestamp {
    order: IOrder;
    customerName: string;
    customerPhoneNumber: string;
    customerEmail: string;
    receiverName: string;
    receiverPhoneNumber: string;
    zipcode: string;
    address: string;
    detailAddress?: string;
    deliveryMessage?: string;
    payResponse?: string;
    purchaseProducts: IPurchaseProduct[];
}
