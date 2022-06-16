import { FoodsQuery } from '../../../generated/graphql';

export interface IFoodList {
  foods: FoodsQuery['foods'] | undefined;
}

export type FoodType = NonNullable<FoodsQuery['foods']>[number];
