import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';

import { ThemeType } from '../../../generated/graphql';

export interface ITextArea
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label: string;
  theme: ThemeType;
}
