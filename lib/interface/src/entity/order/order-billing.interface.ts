import { ITimestamp } from '../timestamp.interface';
import { IOrder } from './order.interface';

export interface IOrderBilling extends ITimestamp {
  order: IOrder;
  name: string;
  customer_uid?: string; // imp 대응. 삭제될 수 있음.
  billkey: string;
  version: number; // 빌링키 바뀐 경우에 대응하기 위해서 사용되는 컬럼. 버전에 따라 다른 요청을 진행한다.
}
