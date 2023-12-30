import { MouseEventHandler } from 'react';

import { ThemeType } from '../../../../generated/graphql';

export type IFoodModalHeader = {
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  theme: ThemeType;
};
