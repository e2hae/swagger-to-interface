export type OptionObj = Record<
  string,
  {
    optionGroupName: string;
    optionId: number;
    optionName: string;
    additionalPrice: number;
    subscriptionAdditionalMonthPrice?: number;
    isUse: boolean;
  }
>;
