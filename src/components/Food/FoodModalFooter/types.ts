import { ThemeType } from '../../../../generated/graphql';

export type IFoodModalFooter = {
  type: 'create' | 'update';
  theme: ThemeType;
};
