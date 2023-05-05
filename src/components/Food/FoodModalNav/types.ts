import { MouseEventHandler } from 'react';

export type IFoodModalNav = {
  name: string | null | undefined;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  loading: boolean;
};
