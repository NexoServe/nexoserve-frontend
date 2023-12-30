import { Dispatch, SetStateAction } from 'react';

import { ThemeType } from '../../../../generated/graphql';

export interface IOrderNavBarModalDelivery {
  setModal: Dispatch<SetStateAction<boolean>>;
  setIsAddressValid: Dispatch<SetStateAction<null | boolean>>;
  isAddressValid: null | boolean;
  theme: ThemeType;
}
