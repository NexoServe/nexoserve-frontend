import { atom, selector } from 'recoil';

import {
  FoodsByCategoryType,
  FoodWithSizesType,
  OptionWithSizeType,
} from '../../generated/graphql';
import { AddOnType } from '../components/Food/FoodAddOn/types';
import { FoodSizeType } from '../components/Food/FoodSize/types';

export type FoodModalType = {
  food: FoodWithSizesType | null | undefined;
  selectedSize: FoodSizeType | undefined;
  quantity: number;
};

export const FoodMenuAtom = atom<FoodsByCategoryType[]>({
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

export const FoodModalSelectedOptionsAtom = atom<OptionWithSizeType[]>({
  key: 'FoodModalSelectedOptionsAtom',
  default: [],
});

export const FoodModalCustomInstructionsAtom = atom<string>({
  key: 'FoodModalCustomInstructionsAtom',
  default: '',
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
      const selectedOptions = get(FoodModalSelectedOptionsAtom);

      let foodPrice: number = foodModal.food?.price as number;

      if (foodModal.selectedSize) {
        foodPrice = foodModal.selectedSize.price ?? 0;
      }

      if (selectedOptions) {
        selectedOptions.forEach((selectedOption) => {
          const optionPrice =
            selectedOption.optionSize?.price || selectedOption.price || 0;
          foodPrice += optionPrice;
        });
      }

      return parseFloat((foodPrice * foodModal.quantity).toFixed(2));
    }
  },
});
