import { ThemeType } from '../../../../generated/graphql';
import { FoodType } from '../FoodModal/types';

export interface IFoodAddOn {
  addOn: AddOnType;
  isRequiredAddOn: boolean;
  theme: ThemeType;
}

export type AddOnType = NonNullable<NonNullable<FoodType>['addOns']>[number];
