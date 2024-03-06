import {
  HeroType,
  SocialMediaType,
  ThemeType,
} from '../../../../generated/graphql';

export interface IHero {
  theme: ThemeType;
  hero: HeroType | null | undefined;
  socialMedia: SocialMediaType | null | undefined;
}
