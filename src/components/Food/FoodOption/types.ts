import { ChangeEventHandler } from 'react';

import { OptionType } from '../../../../generated/graphql';
import { AddOnType } from '../FoodAddOn/types';

export interface IFoodOption {
  option: OptionType;
  addOn: AddOnType;
}

export interface IFoodOptionStyle {
  option: OptionType;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  isChecked: boolean;
  addOn: AddOnType;
}