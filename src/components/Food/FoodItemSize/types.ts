import { ItemType } from '../FoodItem/types';

export interface IFoodItemSize {
  itemSize: ItemSizeType;
  item: ItemType;
}

export type ItemSizeType = NonNullable<
  NonNullable<ItemType>['itemSizes']
>[number];
