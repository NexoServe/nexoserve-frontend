import { FoodByIdQuery } from '../../../../generated/graphql';

export interface IFoodModal {
  foodId: string;
}

export type FoodFormType = {
  foodItems: [string];
  orderItemQuantity: number;
};

export type FoodType = NonNullable<FoodByIdQuery>['foodById'];
