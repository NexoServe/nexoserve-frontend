import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import { ThemeType } from '../../../generated/graphql';

export interface IInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  styleClass?: string;
  label: string;
  isRequired?: boolean;
  error: string | null;
  theme: ThemeType;
}
