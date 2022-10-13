import { ITimestamp } from '../timestamp.interface';
import { PhoneCompany, SubscriptionContractorType } from './enum';
export interface ISubscriptionUser extends ITimestamp {
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
