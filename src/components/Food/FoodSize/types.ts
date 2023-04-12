import { Dispatch, SetStateAction } from 'react';

import { FoodType } from '../FoodModal/types';

export interface IFoodSize {
  size: FoodSizeType;
  selectedSize: FoodSizeType | undefined;
  setSelectedSize: Dispatch<SetStateAction<FoodSizeType | undefined>>;
  [props: string]: unknown;
}

export type FoodSizeType = NonNullable<NonNullable<FoodType>['sizes']>[number];
