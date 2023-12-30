import { Dispatch, SetStateAction } from 'react';

import { ThemeType } from '../../../../generated/graphql';

export interface IShoppingCartCheckoutTipsModal {
  setShowCustomTip: Dispatch<SetStateAction<boolean>>;
  theme: ThemeType;
}
