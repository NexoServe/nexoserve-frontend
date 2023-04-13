import { atom } from 'recoil';

import { ItemSizeType } from '../components/Food/FoodItemSize/types';
import { FoodSizeType } from '../components/Food/FoodSize/types';

type SelectedItem = {
  id: string | null | undefined;
  price: number | null | undefined;
  name: string | null | undefined;
  itemSize: ItemSizeType | null | undefined;
};

export const SelectedSizeAtom = atom<FoodSizeType | undefined>({
  key: 'SelectedSizeAtom',
  default: undefined,
});

export const SelectedItemsAtom = atom<SelectedItem[]>({
  key: 'SelectedItemsAtom',
  default: [],
});
