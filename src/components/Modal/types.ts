import { ReactNode } from 'react';

export interface IModal {
  showModal: boolean;
  children: ReactNode;
  styleClass?: string;
  onClose?: () => void;
}
