import { atom } from 'recoil';

import { AddOnType } from '../components/Food/FoodAddOn/types';
import { ItemSizeType } from '../components/Food/FoodItemSize/types';
import { FoodSizeType } from '../components/Food/FoodSize/types';

type SelectedItem = {
  id: string | null | undefined;
  price: number | null | undefined;
  name: string | null | undefined;
  itemSize: ItemSizeType | null | undefined;
};

export const FoodModalSelectedSizeAtom = atom<FoodSizeType | undefined>({
  key: 'FoodModalSelectedSizeAtom',
  default: undefined,
});

export const FoodModalAddOnsAtom = atom<AddOnType[] | undefined | null>({
  key: 'FoodModalAddOnsAtom',
  default: undefined,
});
export const FoodModalSelectedItemsAtom = atom<SelectedItem[]>({
  key: 'FoodModalSelectedItemsAtom',
  default: [],
});
