import { ThemeType } from '../../../../generated/graphql';

export type IFoodModalContentHeader = {
  name: string | null | undefined;
  isRequired: boolean | null | undefined;
  isRequiredAddOn?: boolean;
  maxOptionsSelected?: number | null | undefined;
  theme: ThemeType;
};
