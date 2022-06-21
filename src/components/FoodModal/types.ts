import { FoodType } from '../FoodList/types';

export interface IFoodModal {
  food: FoodType;
}

export type FoodFormType = {
  foodItems: [string];
};
