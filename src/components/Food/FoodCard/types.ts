import { FoodWithSizesType } from '../../../../generated/graphql';

export interface IFoodCard {
  food: FoodWithSizesType;
  activeFoodClick: (food: FoodWithSizesType) => void;
}
