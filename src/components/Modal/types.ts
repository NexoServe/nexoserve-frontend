import { ReactNode } from 'react';

export interface IModalPopUp {
  showModal: boolean;
  children: ReactNode;
  styleClass?: string;
  overlayClass?: string;
  onClose?: () => void;
}
