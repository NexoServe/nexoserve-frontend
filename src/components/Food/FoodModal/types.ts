import { FoodByIdQuery, ThemeType } from '../../../../generated/graphql';

export interface IFoodModal {
  foodId: string;
  showModal: boolean;
  setShowModal: (value: React.SetStateAction<boolean>) => void;
  type: 'create' | 'update';
  orderItemId?: string;
  customInstructionsText?: string;
  theme: ThemeType;
}

export type FoodType = NonNullable<FoodByIdQuery>['foodById'];
