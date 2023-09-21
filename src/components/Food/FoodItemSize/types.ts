import { ChangeEventHandler } from 'react';

import { ItemSizeType } from '../../../../generated/graphql';
import { AddOnType } from '../FoodAddOn/types';
import { ItemType } from '../FoodItem/types';

export interface IFoodItemSize {
  itemSize: ItemSizeType;
  item: ItemType;
  addOn: AddOnType;
}

export interface IFoodItemSizeStyle {
  itemSize: ItemSizeType;
  item: ItemType;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  isChecked: boolean;
}
