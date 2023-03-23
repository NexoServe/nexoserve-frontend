import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface ButtonType
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  styleClass?: string;
}
