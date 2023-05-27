import { atom } from 'recoil';

import { ShoppingCartItem } from '../../generated/graphql';

type ShoppingCartTotalType = {
  subtotal: number;
  tax: number | undefined | null;
  tip: number | undefined | null;
  grandTotal: number | undefined | null;
  isValidated: boolean;
};

export type ShoppingCartTipType = {
  isTipPercentage: boolean;
  tip: number;
};

export const ShoppingCartAtom = atom<ShoppingCartItem[]>({
  key: 'ShoppingCartAtom',
  default: [],
});

export const ShoppingCartTotalAtom = atom<ShoppingCartTotalType>({
  key: 'ShoppingCartTotalAtom',
  default: {
    subtotal: 0,
    tax: undefined,
    tip: undefined,
    grandTotal: undefined,
    isValidated: false,
  },
});

export const ShoppingCartTipAtom = atom<ShoppingCartTipType>({
  key: 'ShoppingCartTipAtom',
  default: {
    isTipPercentage: true,
    tip: 10,
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
