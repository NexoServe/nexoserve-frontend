import { AddOnType } from '../FoodAddOn/types';

export interface IFoodItem {
  item: ItemType;
  // setSelectedItems: Dispatch<SetStateAction<ItemType[]>>;
  // selectedItems: ItemType[];
}

export type ItemType = NonNullable<NonNullable<AddOnType>['items']>[number];
