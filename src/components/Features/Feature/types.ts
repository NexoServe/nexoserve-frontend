import { FeatureType, ThemeType } from '../../../../generated/graphql';

export interface IFeatures {
  theme: ThemeType;
  features: FeatureType | null | undefined;
}
