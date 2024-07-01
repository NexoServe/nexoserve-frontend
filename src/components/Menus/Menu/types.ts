import { ImageType, ThemeType } from '../../../../generated/graphql';

export interface IMenu {
  styleClass?: string;
  theme: ThemeType;
  type: 'one' | 'two';
  showMenu: boolean;
  gallery: (ImageType | null)[] | undefined | null;
}
