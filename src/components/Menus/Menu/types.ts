import { ThemeType } from '../../../../generated/graphql';

export interface IMenu {
  styleClass?: string;
  theme: ThemeType;
  type: 'one' | 'two';
  showMenu: boolean;
}
