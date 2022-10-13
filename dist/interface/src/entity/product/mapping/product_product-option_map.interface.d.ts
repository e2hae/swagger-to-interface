import { ITimestamp } from '../../timestamp.interface';
import { IProductOption } from '../product-option.interface';
import { IProduct } from '../product.interface';
export interface IProductProductOptionMap extends ITimestamp {
    product: IProduct;
    productOption: IProductOption;
}
