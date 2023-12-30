import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { ThemeType } from '../../../generated/graphql';

export interface IRoundBorder
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
  styleClass?: string;
  theme: ThemeType;
}
