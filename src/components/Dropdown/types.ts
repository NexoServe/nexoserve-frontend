import { Props } from 'react-select';

import { ThemeType } from '../../../generated/graphql';

export interface IDropdown {
  selectProps: Props;
  label: string;
  theme: ThemeType;
}
