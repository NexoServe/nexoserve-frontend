import { Dispatch, SetStateAction } from 'react';

export interface IOrderNavBarModalDelivery {
  setModal: Dispatch<SetStateAction<boolean>>;
  setIsAddressValid: Dispatch<SetStateAction<null | boolean>>;
  isAddressValid: null | boolean;
}
