import { ITimestamp } from '../../timestamp.interface';
import { IBaseProduct } from '../base-product.interface';
import { ITag } from '../tag.interface';

export interface IBaseProductTagMap extends ITimestamp {
  baseProduct: IBaseProduct;
  tag: ITag;
}
