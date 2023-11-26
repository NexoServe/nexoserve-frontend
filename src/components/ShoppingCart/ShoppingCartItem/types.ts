import { Maybe } from 'graphql/jsutils/Maybe';

import {
  OptionWithSizeType,
  ShoppingCartItemType,
} from '../../../../generated/graphql';

export interface IShoppingCartItem {
  shoppingCartItem: ShoppingCartItemType;
  activeShoppingCartItemClick: (shoppingCartItem: ShoppingCartItemType) => void;
}

export type OptionSizeGrouped = {
  optionSizeName: string;
  selectedOptions: Maybe<OptionWithSizeType>[];
};
