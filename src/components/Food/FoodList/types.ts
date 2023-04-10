import {
  FoodsByCategoryQuery,
  FoodsQuery,
} from '../../../../generated/graphql';

export interface IFoodList {
  foods: FoodsQuery['foods'] | undefined;
}

export type FoodType = NonNullable<
  NonNullable<
    NonNullable<
      NonNullable<FoodsByCategoryQuery['foodsByCategory']>[number]
    >['foods']
  >['0']
>;
