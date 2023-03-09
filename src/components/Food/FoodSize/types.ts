import { Dispatch, SetStateAction } from 'react';

import { FoodType } from '../FoodList/types';

export interface IFoodSize {
  size: SizeType;
  selectedSize: SizeType | undefined;
  setSelectedSize: Dispatch<SetStateAction<SizeType | undefined>>;
  [props: string]: unknown;
}

export type SizeType = NonNullable<NonNullable<FoodType>['sizes']>[number];
