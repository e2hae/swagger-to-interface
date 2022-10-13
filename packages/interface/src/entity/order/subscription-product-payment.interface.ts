import { ITimestamp } from '../timestamp.interface';
import { ISubscriptionProduct } from './subscription-product.interface';

export interface ISubscriptionProductPayment extends ITimestamp {
  subscriptionProduct: ISubscriptionProduct;
  stepName: string;
  step: number;
  billingDate?: Date;
  billingPrice: number;
  payDate?: Date;
  payPrice?: number;
  payResponse?: string;
}
