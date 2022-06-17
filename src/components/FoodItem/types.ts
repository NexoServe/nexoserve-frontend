import { AddOnType } from '../FoodAddOn/types';

export interface IFoodItem {
  item: NonNullable<NonNullable<AddOnType>['items']>[number];
}
