import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IRoundBorder
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
  styleClass?: string;
}
