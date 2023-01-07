import { ItemSizeType } from '../FoodItemSize/types';

export interface IFoodItemSizePortion {
  itemSizePortion: ItemSizePortionType;
}

export type ItemSizePortionType = NonNullable<
  NonNullable<ItemSizeType>['portions']
>[number];
