import { ITimestamp } from '../timestamp.interface';
import { IBaseProduct } from './base-product.interface';
import { MainCategoryProductType } from './enum';
import { ISpaceCategoryMainCategoryMap } from './mapping';
import { IPopularProduct } from './popular-product.interface';
import { ISubCategory } from './sub-category.interface';

export interface IMainCategory extends ITimestamp {
  name: string; // 메인 카테고리명, ex)구독:[소파, 침대],  구매:[주방용품, 클리닝케어, 이사, 식물]
  sortOrder: number; // 정렬 순서
  isUse: boolean; // 활성화 여부
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
