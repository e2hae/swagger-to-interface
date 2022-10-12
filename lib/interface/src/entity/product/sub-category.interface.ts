import { ITimestamp } from '../timestamp.interface';
import { IBaseProduct } from './base-product.interface';
import { IMainCategory } from './main-category.interface';

export interface ISubCategory extends ITimestamp {
  mainCategory: IMainCategory;
  name: string;
  sortOrder: number;
  isUse: boolean;
  baseProducts: IBaseProduct[];
}
