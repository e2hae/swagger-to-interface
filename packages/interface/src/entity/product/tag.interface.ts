import { ITimestamp } from '../timestamp.interface';
import { IBaseProductTagMap } from './mapping';

export interface ITag extends ITimestamp {
  name: string; // 태그명
  weight: number; // 가중치
  baseProductMaps?: IBaseProductTagMap[];
}
