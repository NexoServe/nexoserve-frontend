import { Dispatch, SetStateAction } from 'react';

export interface IOrderNavBarModal {
  setModal: Dispatch<SetStateAction<boolean>>;
  headerText: string;
  type?: 'delivery' | null;
  error?: string | null;
}
