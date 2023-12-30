import { MouseEventHandler } from 'react';

import { ThemeType } from '../../../../generated/graphql';

export type IFoodModalNav = {
  name: string | null | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  loading: boolean;
  theme: ThemeType;
};
