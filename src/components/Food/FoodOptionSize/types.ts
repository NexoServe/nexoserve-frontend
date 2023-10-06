import { ChangeEventHandler } from 'react';

import { OptionSizeType, OptionType } from '../../../../generated/graphql';
import { AddOnType } from '../FoodAddOn/types';

export interface IFoodOptionSize {
  optionSize: OptionSizeType;
  option: OptionType;
  addOn: AddOnType;
}

export interface IFoodOptionSizeStyle {
  optionSize: OptionSizeType;
  option: OptionType;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  isChecked: boolean;
}
