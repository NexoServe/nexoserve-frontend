import { SimpleFoodType } from '../FoodList/types';

export interface IFoodCard {
  food: SimpleFoodType;
  activeFoodClick: (food: SimpleFoodType) => void;
}
