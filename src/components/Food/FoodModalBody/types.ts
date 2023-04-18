import { FoodByIdQuery } from '../../../../generated/graphql';

export type IFoodModalHeader = {
  data: FoodByIdQuery | undefined;
  showModal: boolean;
};
