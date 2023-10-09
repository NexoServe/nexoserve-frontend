import { FoodType } from '../../../../generated/graphql';

export type IFoodModalBody = {
  food: FoodType;
  showModal: boolean;
  type: 'create' | 'update';
};
