import { ImageType, ThemeType } from '../../../../generated/graphql';

export interface INavbar {
  logo: string;
  restaurantName: string;
  theme: ThemeType;
  type: string;
  gallery: (ImageType | null)[] | undefined | null;
}
