import { FoodType } from '../../../../generated/graphql';

export type IFoodModalHeader = {
  food: FoodType;
  showModal: boolean;
  type: 'create' | 'update';
};
