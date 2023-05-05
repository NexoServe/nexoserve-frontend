import { FoodType } from '../FoodModal/types';

export interface IFoodAddOn {
  addOn: AddOnType;
  isRequiredAddOn: boolean;
}

export type AddOnType = NonNullable<NonNullable<FoodType>['addOns']>[number];
