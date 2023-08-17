import { Maybe } from 'graphql/jsutils/Maybe';

import { SelectedItem, ShoppingCartItem } from '../../../../generated/graphql';

export interface IShoppingCartItem {
  shoppingCartItem: ShoppingCartItem;
}

export type ItemSizeGrouped = {
  itemSizeName: string;
  selectedItems: Maybe<SelectedItem>[];
};
