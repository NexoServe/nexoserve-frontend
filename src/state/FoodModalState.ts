import { atom } from 'recoil';

import { AddOnType } from '../components/Food/FoodAddOn/types';
import { ItemSizeType } from '../components/Food/FoodItemSize/types';
import { SimpleFoodType } from '../components/Food/FoodList/types';
import { FoodSizeType } from '../components/Food/FoodSize/types';

export type SelectedItemType = {
  id: string | null | undefined;
  price: number | null | undefined;
  name: string | null | undefined;
  itemSize: ItemSizeType | null | undefined;
  addOnId: string | null | undefined;
};

export type FoodModalType = {
  food: SimpleFoodType | null | undefined;
  selectedSize: FoodSizeType | undefined;
  quantity: number;
};

export const FoodModalAddOnsAtom = atom<AddOnType[] | undefined | null>({
  key: 'FoodModalAddOnsAtom',
  default: undefined,
});

export const FoodModalAddOnRequiredAtom = atom<AddOnType | undefined | null>({
  key: 'FoodModalAddOnRequiredAtom',
  default: undefined,
});

export const FoodModalSelectedItemsAtom = atom<SelectedItemType[]>({
  key: 'FoodModalSelectedItemsAtom',
  default: [],
});

export const FoodModalPriceAtom = atom<number>({
  key: 'FoodModalPriceAtom',
  default: 0,
});

export const FoodModalAtom = atom<FoodModalType>({
  key: 'FoodModalAtom',
  default: {
    food: null,
    selectedSize: undefined,
    quantity: 1,
  },
});
