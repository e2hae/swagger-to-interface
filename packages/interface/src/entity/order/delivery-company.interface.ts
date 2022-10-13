import { ITimestamp } from '../timestamp.interface';
import { IPurchaseProduct } from './purchase-product.inteface';
import { ISubscriptionProduct } from './subscription-product.interface';

export interface IDeliveryCompany extends ITimestamp {
  name: string;
  deliveryTrackUrl: string;
  isUse: boolean;
  subscriptionProducts: ISubscriptionProduct[];
  purchaseProducts: IPurchaseProduct[];
}
