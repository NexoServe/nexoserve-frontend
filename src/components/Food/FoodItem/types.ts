import { AddOnType } from '../FoodAddOn/types';

export interface IFoodItem {
  item: ItemType;
  addOn: AddOnType;
}

export type ItemType = NonNullable<NonNullable<AddOnType>['items']>[number];
