import { ChangeEventHandler } from 'react';

import {
  OptionSizeType,
  OptionType,
  ThemeType,
} from '../../../../generated/graphql';
import { AddOnType } from '../FoodAddOn/types';

export interface IFoodOptionSize {
  optionSize: OptionSizeType;
  option: OptionType;
  addOn: AddOnType;
  theme: ThemeType;
}

export interface IFoodOptionSizeStyle {
  optionSize: OptionSizeType;
  option: OptionType;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  isChecked: boolean;
  theme: ThemeType;
}
