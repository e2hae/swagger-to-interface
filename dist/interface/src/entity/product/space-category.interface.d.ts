import { ITimestamp } from '../timestamp.interface';
import { IProductSubscriptionSpaceCategoryMap, ISpaceCategoryMainCategoryMap } from './mapping';
export interface ISpaceCategory extends ITimestamp {
    name: string;
    sortOrder: number;
    isUse: boolean;
    iconImage?: string;
    mainCategoryMaps?: ISpaceCategoryMainCategoryMap[];
    productSubscriptionMaps?: IProductSubscriptionSpaceCategoryMap[];
}
