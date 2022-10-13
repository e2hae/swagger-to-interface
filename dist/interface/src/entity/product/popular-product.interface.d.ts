import { ITimestamp } from '../timestamp.interface';
import { IProductSubscription } from './base-product.interface';
import { IMainCategory } from './main-category.interface';
export interface IPopularProduct extends ITimestamp {
    mainCategory: IMainCategory;
    productSubscription: IProductSubscription;
    sortOrder: number;
}
