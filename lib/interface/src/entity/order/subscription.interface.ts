import { ITimestamp } from '../timestamp.interface';
import { SubscriptionPayDays } from './enum';
import { IOrder } from './order.interface';
import { ISubscriptionContractor } from './subscription-contractor.interface';
import { ISubscriptionProduct } from './subscription-product.interface';
import { ISubscriptionUser } from './subscription-user.interface';

export interface ISubscription extends ITimestamp {
  order: IOrder;
  isAgreement: boolean;
  payDays: SubscriptionPayDays;
  subscriptionContractor: ISubscriptionContractor;
  subscriptionUser: ISubscriptionUser;
  subscriptionProducts: ISubscriptionProduct[];
}
