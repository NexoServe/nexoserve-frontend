import { atom } from 'recoil';

export const CheckoutFirstNameAtom = atom<string>({
  key: 'CheckoutFirstNameAtom',
  default: '',
});

export const CheckoutFirstNameErrorAtom = atom<boolean>({
  key: 'CheckoutFirstNameErrorAtom',
  default: false,
});

export const CheckoutLastNameAtom = atom<string>({
  key: 'CheckoutLastNameAtom',
  default: '',
});

export const CheckoutLastNameErrorAtom = atom<boolean>({
  key: 'CheckoutLastNameErrorAtom',
  default: false,
});

export const CheckoutEmailAtom = atom<string>({
  key: 'CheckoutEmailAtom',
  default: '',
});

export const CheckoutEmailErrorAtom = atom<boolean>({
  key: 'CheckoutEmailErrorAtom',
  default: false,
});

export const CheckoutPhoneNumberAtom = atom<string>({
  key: 'CheckoutPhoneNumberAtom',
  default: '',
});

export const CheckoutPhoneNumberErrorAtom = atom<boolean>({
  key: 'CheckoutPhoneNumberErrorAtom',
  default: false,
});

export const isCheckoutContactIncompleteAtom = atom<boolean>({
  key: 'isCheckoutContactIncompleteAtom',
  default: false,
});
