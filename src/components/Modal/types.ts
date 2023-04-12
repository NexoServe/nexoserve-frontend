import { ReactNode } from 'react';

export interface IModal {
  showModal: boolean;
  setShowModal: (value: React.SetStateAction<boolean>) => void;
  children: ReactNode;
  styleClass?: string;
  onClose?: () => void;
}
