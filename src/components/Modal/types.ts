import { ReactNode } from 'react';

export interface IModalPopUp {
  showModal: boolean;
  children: ReactNode;
  styleClass?: string;
  onClose?: () => void;
}
