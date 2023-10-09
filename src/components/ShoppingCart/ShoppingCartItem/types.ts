import { Maybe } from 'graphql/jsutils/Maybe';

import {
  OptionWithSizeType,
  ShoppingCartItem,
} from '../../../../generated/graphql';

export interface IShoppingCartItem {
  shoppingCartItem: ShoppingCartItem;
}

export type OptionSizeGrouped = {
  optionSizeName: string;
  selectedOptions: Maybe<OptionWithSizeType>[];
};
