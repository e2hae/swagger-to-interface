import { ITimestamp } from '../timestamp.interface';
import { IBaseProduct } from './base-product.interface';

export interface IProductDelivery extends ITimestamp {
  baseProduct: IBaseProduct;
  deliveryFee: number;
  deliveryCompanyId?: number;
}
