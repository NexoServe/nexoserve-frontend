import { ChangeEventHandler } from 'react';

import { UseFormRegister } from 'react-hook-form';

import { ItemType } from '../FoodItem/types';
import { FoodFormType } from '../FoodModal/types';

export interface IFoodItemSize {
  itemSize: ItemSizeType;
  item: ItemType;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  isChecked: boolean;
  register: UseFormRegister<FoodFormType>;
}

export type ItemSizeType = NonNullable<
  NonNullable<ItemType>['itemSizes']
>[number];
