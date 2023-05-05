import { atom } from 'recoil';

import { ShoppingCartItem } from '../../generated/graphql';

type ShoppingCartTotalType = {
  total: number;
  isValidated: boolean;
};

export const ShoppingCartAtom = atom<ShoppingCartItem[]>({
  key: 'ShoppingCartAtom',
  default: [],
});

export const ShoppingCartTotalAtom = atom<ShoppingCartTotalType>({
  key: 'ShoppingCartTotalAtom',
  default: {
    total: 0,
    isValidated: false,
  },
});

export const ShowShoppingCartAtom = atom({
  key: 'ShowShoppingCartAtom',
  default: false,
});

export const ShowShoppingCartDetailsAtom = atom({
  key: 'ShowShoppingCartDetailsAtom',
  default: true,
});
