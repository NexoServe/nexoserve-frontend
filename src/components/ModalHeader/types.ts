import { MouseEventHandler } from 'react';

export interface IModalHeader {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  styleClass?: string;
}
