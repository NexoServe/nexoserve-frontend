import { ReactNode } from 'react';

import { ThemeType } from '../../../generated/graphql';

export interface IModalPopUp {
  showModal: boolean;
  children: ReactNode;
  styleClass?: string;
  overlayClass?: string;
  onClose: () => void;
  theme: ThemeType;
}
