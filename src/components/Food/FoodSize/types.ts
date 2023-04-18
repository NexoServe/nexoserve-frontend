import { FoodType } from '../FoodModal/types';

export interface IFoodSize {
  size: FoodSizeType;
}

export type FoodSizeType = NonNullable<NonNullable<FoodType>['sizes']>[number];
