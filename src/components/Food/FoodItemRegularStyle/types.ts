import { ChangeEventHandler } from 'react';

import { UseFormRegister } from 'react-hook-form';

import { AddOnType } from '../FoodAddOn/types';
import { FoodFormType } from '../FoodModal/types';

export interface IFoodItemToppingStyle {
  item: ItemType;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  isChecked: boolean;
  register: UseFormRegister<FoodFormType>;
  addOn: AddOnType;
}

export type ItemType = NonNullable<NonNullable<AddOnType>['items']>[number];
