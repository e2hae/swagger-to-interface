import { ITimestamp } from '../timestamp.interface';
import { IBaseProduct } from './base-product.interface';
import { IProductOption } from './product-option.interface';

export interface IProductOptionGroup extends ITimestamp {
  name: string;
  sortOrder: number; // 정렬 순서
  options: IProductOption[];
  isUse: boolean;
  baseProduct: IBaseProduct;
}
