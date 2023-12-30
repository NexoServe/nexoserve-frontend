import { ThemeType } from '../../../../generated/graphql';

export interface IShoppingCart {
  styleClass?: string;
  isCheckout?: boolean;
  theme: ThemeType;
}
