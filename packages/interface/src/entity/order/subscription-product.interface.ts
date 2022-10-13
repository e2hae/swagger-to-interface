import { OptionObj } from '../../../../common/src/type/product-service.type';
import { ITimestamp } from '../timestamp.interface';
import { IDeliveryCompany } from './delivery-company.interface';
import { MinRentalPeriod, SubscriptionProductState } from './enum';
import { ISubscriptionProductPayment } from './subscription-product-payment.interface';
import { ISubscriptionProductReturn } from './subscription-product-return.interface';
import { ISubscription } from './subscription.interface';

export interface ISubscriptionProduct extends ITimestamp {
  subscription: ISubscription;
  baseProductId: number;
  productCode: string;
  productName: string;
  thumbnailImage: string;
  brandName: string;
  optionObj?: OptionObj;
  monthPrice: number;
  price: number;
  deliveryFee: number;
  minRentalPeriod: MinRentalPeriod;
  endRentalStep?: number;
  state: SubscriptionProductState;
  deliveryExpectedDate?: Date;
  deliveryDate?: Date;
  contractStartDate?: Date;
  contractEndDate?: Date;
  deliveryCompany: IDeliveryCompany;
  deliveryTrackingNumber?: string;
  subscriptionProductPayments: ISubscriptionProductPayment[];
  subscriptionProductReturn?: ISubscriptionProductReturn;
}
