import { ITimestamp } from '../../timestamp.interface';
import { IMainCategory } from '../main-category.interface';
import { ISpaceCategory } from '../space-category.interface';
export interface ISpaceCategoryMainCategoryMap extends ITimestamp {
    spaceCategory: ISpaceCategory;
    mainCategory: IMainCategory;
}
