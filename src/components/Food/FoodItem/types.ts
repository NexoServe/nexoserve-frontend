import { ChangeEventHandler } from 'react';

import { AddOnType } from '../FoodAddOn/types';

export interface IFoodItem {
  item: ItemType;
  addOn: AddOnType;
}

export interface IFoodItemStyle {
  item: ItemType;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  isChecked: boolean;
  addOn: AddOnType;
}

export type ItemType = NonNullable<NonNullable<AddOnType>['items']>[number];
