import { ITimestamp } from '../timestamp.interface';
import { OrderState } from './enum';
import { IOrderAddress } from './order-address.interface';
import { IOrderBilling } from './order-billing.interface';
import { IOrderUser } from './order-user.interface';
import { IPurchase } from './purchase.interface';
import { ISubscription } from './subscription.interface';

export interface IOrder extends ITimestamp {
  userId: string;
  orderCode: string;
  state: OrderState;
  usingCouponId?: string;
  saleCouponPrice: number;
  salePointPrice: number;
  deliveryFeePayResponse?: string;
  orderUser: IOrderUser;
  orderAddress: IOrderAddress;
  orderBilling?: IOrderBilling;
  subscription?: ISubscription;
  purchase?: IPurchase;
}
