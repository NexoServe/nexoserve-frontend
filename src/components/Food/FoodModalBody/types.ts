import { FoodType, ThemeType } from '../../../../generated/graphql';

export type IFoodModalBody = {
  food: FoodType;
  showModal: boolean;
  type: 'create' | 'update';
  theme: ThemeType;
};
