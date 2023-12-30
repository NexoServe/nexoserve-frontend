import { ChangeEventHandler } from 'react';

import { OptionType, ThemeType } from '../../../../generated/graphql';
import { AddOnType } from '../FoodAddOn/types';

export interface IFoodOption {
  option: OptionType;
  addOn: AddOnType;
  theme: ThemeType;
}

export interface IFoodOptionStyle {
  option: OptionType;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  isChecked: boolean;
  addOn: AddOnType;
  disabled: boolean;
  theme: ThemeType;
}
