import { ThemeType } from '../../../../generated/graphql';
import { FoodType } from '../FoodModal/types';

export interface IFoodSize {
  size: FoodSizeType;
  theme: ThemeType;
}

export type FoodSizeType = NonNullable<NonNullable<FoodType>['sizes']>[number];
