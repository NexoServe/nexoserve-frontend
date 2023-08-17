import { Dispatch, SetStateAction } from 'react';

export interface IOrderNavBarModalDelivery {
  setIsAddressValid: Dispatch<SetStateAction<null | boolean>>;
  isAddressValid: null | boolean;
}
