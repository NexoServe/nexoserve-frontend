import { atom, selector } from 'recoil';

import { FoodsByCategory } from '../../generated/graphql';
import { AddOnType } from '../components/Food/FoodAddOn/types';
import { ItemSizeType } from '../components/Food/FoodItemSize/types';
import { SimpleFoodType } from '../components/Food/FoodList/types';
import { FoodSizeType } from '../components/Food/FoodSize/types';

export type SelectedItemType = {
  id: string | null | undefined;
  price: number | null | undefined;
  name: string | null | undefined;
  itemSize: ItemSizeType | null | undefined;
  addOnName: string | null | undefined;
};

export type FoodModalType = {
  food: SimpleFoodType | null | undefined;
  selectedSize: FoodSizeType | undefined;
  quantity: number;
};

export const FoodMenuAtom = atom<FoodsByCategory[]>({
  key: 'FoodMenuAtom',
  default: [],
});

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

export const FoodModalSelectedSizeAtom = atom<FoodSizeType | undefined>({
  key: 'FoodModalSelectedSizeAtom',
  default: undefined,
});

export const FoodModalAtom = atom<FoodModalType>({
  key: 'FoodModalAtom',
  default: {
    food: null,
    selectedSize: undefined,
    quantity: 1,
  },
});

export const foodModalTotalSelector = selector({
  key: 'foodModalTotalSelector',
  get: ({ get }) => {
    const foodModal = get(FoodModalAtom);
    if (foodModal.food) {
      const selectedItems = get(FoodModalSelectedItemsAtom);

      let foodPrice: number = foodModal.food?.price as number;

      if (foodModal.selectedSize) {
        foodPrice = foodModal.selectedSize.price ?? 0;
      }

      if (selectedItems) {
        selectedItems.forEach((selectedItem) => {
          const itemPrice =
            selectedItem.itemSize?.price || selectedItem.price || 0;
          foodPrice += itemPrice;
        });
      }

      return parseFloat((foodPrice * foodModal.quantity).toFixed(2));
    }
  },
});
