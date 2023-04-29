import { AddOnType } from '../FoodAddOn/types';
import { ItemType } from '../FoodItem/types';

export interface IFoodItemSize {
  itemSize: ItemSizeType;
  item: ItemType;
  addOn: AddOnType;
}

export type ItemSizeType = NonNullable<
  NonNullable<ItemType>['itemSizes']
>[number];
