import { atom } from 'recoil';

import { FoodModalType, SelectedItemType } from './FoodModalState';

export interface ShoppingCartItemType extends FoodModalType {
  orderItemId: string;
  selectedItems: SelectedItemType[];
}

export const ShoppingCartAtom = atom<ShoppingCartItemType[]>({
  key: 'ShoppingCartAtom',
  default: [],
});

export const ShowShoppingCartAtom = atom({
  key: 'ShowShoppingCartAtom',
  default: false,
});

export const ShowShoppingCartDetailsAtom = atom({
  key: 'ShowShoppingCartDetailsAtom',
  default: true,
});
