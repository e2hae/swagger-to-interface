import { ITimestamp } from '../timestamp.interface';
import { IBrand } from './brand.interface';
export interface ICompany extends ITimestamp {
    name: string;
    brands: IBrand[];
}
