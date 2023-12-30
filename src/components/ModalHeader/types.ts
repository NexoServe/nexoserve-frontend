import { MouseEventHandler } from 'react';

import { ThemeType } from '../../../generated/graphql';

export interface IModalHeader {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  styleClass?: string;
  showCloseIcon?: boolean;
  theme: ThemeType;
}
