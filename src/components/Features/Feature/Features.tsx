import FeaturesTypeOne from '../01_FeaturesTypeOne/FeaturesTypeOne';
import FeaturesTypeTwo from '../02_FeaturesTypeTwo/FeaturesTypeTwo';
import FeaturesTypeThree from '../03_FeaturesTypeThree/FeaturesTypeThree';

import { IFeatures } from './types';

const Features = ({ theme, features }: IFeatures) => {
  return (
    <>
      {features?.type === 'one' ? (
        <FeaturesTypeOne theme={theme} features={features} />
      ) : features?.type === 'two' ? (
        <FeaturesTypeTwo theme={theme} features={features} />
      ) : features?.type === 'three' ? (
        <FeaturesTypeThree theme={theme} features={features} />
      ) : null}
    </>
  );
};

export default Features;
