import { atom } from 'recoil';

import { ItemType } from '../components/Food/FoodItem/types';
import { FoodSizeType } from '../components/Food/FoodSize/types';

type SelectedItemSizeType = {
  id: string | null | undefined;
  parentName: string | null | undefined;
  name: string | null | undefined;
};

export const SelectedSizeAtom = atom<FoodSizeType | undefined>({
  key: 'SelectedSizeAtom',
  default: undefined,
});

export const SelectedItemsAtom = atom<ItemType[]>({
  key: 'SelectedItemsAtom',
  default: [],
});

export const SelectedItemSizesAtom = atom<SelectedItemSizeType[]>({
  key: 'SelectedItemSizesAtom',
  default: [],
});
