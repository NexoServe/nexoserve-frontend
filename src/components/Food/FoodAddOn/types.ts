import { FoodType } from '../FoodModal/types';

export interface IFoodAddOn {
  addOn: AddOnType;
  // setSelectedItems: Dispatch<SetStateAction<ItemType[]>>;
  // selectedItems: ItemType[];
}

export type AddOnType = NonNullable<NonNullable<FoodType>['addOns']>[number];
