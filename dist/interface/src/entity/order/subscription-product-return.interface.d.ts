import { ITimestamp } from '../timestamp.interface';
import { ElevatorType, ReturnState } from './enum';
import { ISubscriptionProduct } from './subscription-product.interface';
export interface ISubscriptionProductReturn extends ITimestamp {
    subscriptionProduct: ISubscriptionProduct;
    zipcode: string;
    address: string;
    detailAddress?: string;
    phoneNumber: string;
    elevatorType: ElevatorType;
    returnWantWeekStartDate: Date;
    returnExpectedDate: Date;
    returnDate: Date;
    state: ReturnState;
}
