import { Dispatch, SetStateAction } from 'react';

import { ThemeType } from '../../../../generated/graphql';

export interface IOrderInfoModal {
  setModal: Dispatch<SetStateAction<boolean>>;
  theme: ThemeType;
}
