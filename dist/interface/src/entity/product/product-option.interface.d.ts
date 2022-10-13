import { ITimestamp } from '../timestamp.interface';
import { IProductProductOptionMap } from './mapping';
import { IProductOptionGroup } from './product-option-group.inferface';
export interface IProductOption extends ITimestamp {
    optionGroup: IProductOptionGroup;
    name: string;
    isUse: boolean;
    additionalPrice: number;
    subscriptionAdditionalMonthPrice?: number;
    sortOrder: number;
    productMaps?: IProductProductOptionMap[];
}
