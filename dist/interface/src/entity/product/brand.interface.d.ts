import { ITimestamp } from '../timestamp.interface';
import { IBaseProduct } from './base-product.interface';
import { ICompany } from './company.interface';
export interface IBrand extends ITimestamp {
    name: string;
    description: string;
    brandPageBannerImage?: string;
    brandPageBannerMobileImage?: string;
    sortOrder: number;
    isUse: boolean;
    deliveryCompany?: string;
    contact: string;
    company: ICompany;
    baseProducts: IBaseProduct[];
}
