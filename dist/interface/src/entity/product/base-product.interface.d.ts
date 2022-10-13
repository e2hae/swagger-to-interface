import { ITimestamp } from '../timestamp.interface';
import { IBrand } from './brand.interface';
import { MinRentalPeriod, ProductState } from './enum';
import { IMainCategory } from './main-category.interface';
import { IBaseProductTagMap, IProductSubscriptionSpaceCategoryMap } from './mapping';
import { IPopularProduct } from './popular-product.interface';
import { IProductDelivery } from './product-delivery.interface';
import { IProductOptionGroup } from './product-option-group.inferface';
import { IProduct } from './product.interface';
import { ISubCategory } from './sub-category.interface';
export interface IBaseProduct extends ITimestamp {
    name: string;
    basePrice: number;
    brandName: string;
    brand: IBrand;
    mainCategory: IMainCategory;
    subCategory: ISubCategory;
    delivery: IProductDelivery;
    state: ProductState;
    isUse: boolean;
    sortWeight?: number;
    thumbnailImage: string;
    updateUser?: string;
    createUser?: string;
    cardImages: string[];
    optionGroups?: IProductOptionGroup[];
    products?: IProduct[];
    simpleDescription?: string;
    detailDescription?: string;
    detailDescriptionMobile?: string;
    detailInfo?: string;
    detailInfoMobile?: string;
    tagMaps?: IBaseProductTagMap[];
}
export interface IProductSubscription extends IBaseProduct {
    minRentalPeriod: MinRentalPeriod;
    baseMonthPrice: number;
    isIncludeRemember: boolean;
    externalLinkCode?: string;
    modelingURL?: string;
    popularProducts?: IPopularProduct[];
    spaceCategoryMaps?: IProductSubscriptionSpaceCategoryMap[];
}
export interface IProductPurchase extends IBaseProduct {
}
