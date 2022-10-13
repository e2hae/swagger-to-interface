import { OptionObj } from 'packages/common/src';
import { ITimestamp } from '../timestamp.interface';
import { IDeliveryCompany } from './delivery-company.interface';
import { PurchaseProductState } from './enum';
import { IPurchase } from './purchase.interface';
export interface IPurchaseProduct extends ITimestamp {
    purchase: IPurchase;
    baseProductId: number;
    productCode: string;
    productName: string;
    thumbnailImage: string;
    brandName: string;
    optionObj?: OptionObj;
    price: number;
    deliveryFee: number;
    state: PurchaseProductState;
    deliveryExpectedDate?: Date;
    deliveryDate?: Date;
    deliveryCompany: IDeliveryCompany;
    deliveryTrackingNumber?: string;
}
