import { DateTime } from 'luxon';
import { atom } from 'recoil';

import { DayOutput } from '../../generated/graphql';

export type OrderTime = {
  value: DateTime | null;
  label: string;
};

interface IOrderOpeningHours {
  openingHours: DayOutput[];
  timezone: string;
  currentDateTime: string;
  isOpenNow: boolean;
  isOrderTimeValid: boolean;
}

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

export const OrderOpeningHoursAtom = atom<IOrderOpeningHours | undefined>({
  key: 'OrderOpeningHoursAtom',
  default: undefined,
});
