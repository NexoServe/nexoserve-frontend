import { ThemeType } from '../../../../generated/graphql';

export interface IOrderType {
  isCheckout?: boolean;
  theme: ThemeType;
}
