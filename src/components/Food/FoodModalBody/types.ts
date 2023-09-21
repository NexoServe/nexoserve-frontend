import { FoodByIdQuery } from '../../../../generated/graphql';

export type IFoodModalHeader = {
  data: FoodByIdQuery;
  showModal: boolean;
  type: 'create' | 'update';
};
