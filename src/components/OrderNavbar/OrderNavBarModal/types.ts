import { Dispatch, SetStateAction } from 'react';

import { ThemeType } from '../../../../generated/graphql';

export interface IOrderNavBarModal {
  setModal: Dispatch<SetStateAction<boolean>>;
  headerText: string;
  type?: 'delivery' | 'pickup';
  error?: string | null;
  theme: ThemeType;
}
