import { AboutUsType, ThemeType } from '../../../../generated/graphql';

export interface IAbout {
  theme: ThemeType;
  aboutUs: AboutUsType | null | undefined;
}
