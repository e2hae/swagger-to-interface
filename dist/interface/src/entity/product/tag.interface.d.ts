import { ITimestamp } from '../timestamp.interface';
import { IBaseProductTagMap } from './mapping';
export interface ITag extends ITimestamp {
    name: string;
    weight: number;
    baseProductMaps?: IBaseProductTagMap[];
}
