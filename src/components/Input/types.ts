import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface IInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  styleClass?: string;
  label: string;
  isRequired?: boolean;
  isPhoneNumber?: boolean;
}
