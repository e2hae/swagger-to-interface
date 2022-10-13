import { ITimestamp } from '../timestamp.interface';
import { PhoneCompany, SubscriptionContractorType } from './enum';
import { ISubscription } from './subscription.interface';
export interface ISubscriptionContractor extends ITimestamp {
    subscription: ISubscription;
    type: SubscriptionContractorType;
    name: string;
    birth?: string;
    businessNumber?: string;
    phoneCompany: PhoneCompany;
    phoneNumber: string;
    email: string;
    zipcode: string;
    address: string;
    detailAddress?: string;
    deliveryMessage?: string;
}
