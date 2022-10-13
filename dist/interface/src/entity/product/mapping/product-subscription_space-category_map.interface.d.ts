import { ITimestamp } from '../../timestamp.interface';
import { IProductSubscription } from '../base-product.interface';
import { ISpaceCategory } from '../space-category.interface';
export interface IProductSubscriptionSpaceCategoryMap extends ITimestamp {
    productSubscription: IProductSubscription;
    spaceCategory: ISpaceCategory;
}
