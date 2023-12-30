import { ThemeType } from '../../../../generated/graphql';

export type IFoodModalHeader = {
  name: string | null | undefined;
  description: string | null | undefined;
  theme: ThemeType;
};
