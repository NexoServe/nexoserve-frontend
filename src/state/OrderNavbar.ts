import { DateTime } from 'luxon';
import { atom } from 'recoil';

import { OrderDetailsType } from '../../generated/graphql';

export type OrderTime = {
  value: DateTime | null;
  label: string;
};

export const OrderDetailsAtom = atom<OrderDetailsType>({
  key: 'OrderDetailsAtom',
  default: undefined,
});

export const OrderIsPickUpAtom = atom<boolean>({
  key: 'OrderIsPickUpAtom',
  default: true,
});

export const OrderTimeAtom = atom<OrderTime | undefined>({
  key: 'OrderTimeAtom',
  default: {
    value: null,
    label: 'ASAP',
  },
});

export const OrderDateAtom = atom<OrderTime | undefined>({
  key: 'OrderDateAtom',
  default: {
    value: null,
    label: 'Today',
  },
});

export const OrderDeliveryAddressAtom = atom<string | undefined>({
  key: 'OrderDeliveryAddressAtom',
  default: undefined,
});

export const OrderDeliveryAdditionalAddressInfoAtom = atom<string | undefined>({
  key: 'OrderDeliveryAdditionalAddressInfoAtom',
  default: undefined,
});

export const OrderDeliveryDetailsAtom = atom<string | undefined>({
  key: 'OrderDeliveryDetailsAtom',
  default: undefined,
});

export const OrderShowInvalidTimeModalAtom = atom<boolean>({
  key: 'OrderShowInvalidTimeModalAtom',
  default: false,
});
