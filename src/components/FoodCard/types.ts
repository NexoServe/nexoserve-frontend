import { FoodType } from '../FoodList/types';

export interface IFoodCard {
  food: FoodType;
  activeFoodClick: (food: FoodType) => void;
}
