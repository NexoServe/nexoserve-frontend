import { ItemType } from '../FoodItem/types';

export interface IFoodItemSize {
  itemSize: ItemSizeType;
}

export type ItemSizeType = NonNullable<
  NonNullable<ItemType>['itemSizes']
>[number];
