import { FoodByIdQuery } from '../../../../generated/graphql';

export interface IFoodModal {
  foodId: string;
  showModal: boolean;
  setShowModal: (value: React.SetStateAction<boolean>) => void;
  type: 'create' | 'update';
  orderItemId?: string;
}

export type FoodType = NonNullable<FoodByIdQuery>['foodById'];
