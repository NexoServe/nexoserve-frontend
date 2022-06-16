import { FoodType } from '../FoodList/types';

export interface IFoodAddOn {
  addOn: AddOnType;
}

export type AddOnType = NonNullable<NonNullable<FoodType>['addOns']>[number];
