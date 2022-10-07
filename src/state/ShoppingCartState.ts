import { atom } from 'recoil';

export const ShoppingCartAtom = atom({
  key: 'ShoppingCartAtom',
  default: [],
});

export const OrderAtom = atom({
  key: 'OrderAtom',
  default: [],
});
