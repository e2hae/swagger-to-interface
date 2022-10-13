import { ITimestamp } from '../timestamp.interface';
import { IBaseProduct } from './base-product.interface';
import { MainCategoryProductType } from './enum';
import { ISpaceCategoryMainCategoryMap } from './mapping';
import { IPopularProduct } from './popular-product.interface';
import { ISubCategory } from './sub-category.interface';
export interface IMainCategory extends ITimestamp {
    name: string;
    sortOrder: number;
    isUse: boolean;
    subCategories: ISubCategory[];
    iconImage?: string;
    purchasePageBannerImage?: string;
    purchasePageBannerMobileImage?: string;
    productType: MainCategoryProductType;
    isNew: boolean;
    baseProducts: IBaseProduct[];
    description: string;
    popularProducts?: IPopularProduct[];
    spaceCategoryMaps?: ISpaceCategoryMainCategoryMap[];
}
