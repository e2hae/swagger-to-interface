import { OptionObj } from 'packages/common/src';
import { ITimestamp } from '../timestamp.interface';
import { IBaseProduct } from './base-product.interface';
import { IProductProductOptionMap } from './mapping';

export interface IProduct extends ITimestamp {
  optionObj: OptionObj;
  productCode: string;
  price: number;
  monthPrice?: number;
  isUse: boolean;
  isSoldOut: boolean;
  baseProduct: IBaseProduct;
  productOptionMaps?: IProductProductOptionMap[];
}
