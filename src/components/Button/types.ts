import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import { ThemeType } from '../../../generated/graphql';

export interface ButtonType
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  styleClass?: string;
  theme: ThemeType;
}
