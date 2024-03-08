import { Maybe } from 'graphql/jsutils/Maybe';

import {
  OptionWithSizeType,
  ShoppingCartItemType,
  ThemeType,
} from '../../../../generated/graphql';

export interface IShoppingCartItem {
  shoppingCartItem: ShoppingCartItemType;
  activeShoppingCartItemClick: (shoppingCartItem: ShoppingCartItemType) => void;
  theme: ThemeType;
}

export type OptionSizeGrouped = {
  optionSizeName: string;
  optionSizeSort: number;
  selectedOptions: Maybe<OptionWithSizeType>[];
};
