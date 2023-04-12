import { FoodsByCategoryQuery } from '../../../../generated/graphql';

export type SimpleFoodType = NonNullable<
  NonNullable<
    NonNullable<
      NonNullable<FoodsByCategoryQuery['foodsByCategory']>[number]
    >['foods']
  >['0']
>;
