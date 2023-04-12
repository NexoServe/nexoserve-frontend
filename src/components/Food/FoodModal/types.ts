import { FoodByIdQuery } from '../../../../generated/graphql';
import { ItemSizeType } from '../FoodItemSize/types';
import { FoodSizeType } from '../FoodSize/types';

export interface IFoodModal {
  foodId: string;
  showModal: boolean;
  setShowModal: (value: React.SetStateAction<boolean>) => void;
}

export type FoodFormType = {
  foodItems: [string];
  foodItemSize: ItemSizeType;
  foodSize: FoodSizeType;
  orderItemQuantity: number;
};

export type FoodType = NonNullable<FoodByIdQuery>['foodById'];
