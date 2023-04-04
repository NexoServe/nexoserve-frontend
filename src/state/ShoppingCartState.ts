import { atom } from 'recoil';

export const ShowShoppingCartAtom = atom({
  key: 'ShowShoppingCartAtom',
  default: false,
});

export const ShowShoppingCartDetailsAtom = atom({
  key: 'ShowShoppingCartDetailsAtom',
  default: true,
});

// export const OrderAtom = atom({
//   key: 'OrderAtom',
//   default: [],
// });
