import FeaturesTypeOne from '../FeaturesTypeOne/FeaturesTypeOne';
import FeaturesTypeTwo from '../FeaturesTypeTwo/FeaturesTypeTwo';

import { IFeatures } from './types';

const Features = ({ theme, features }: IFeatures) => {
  return (
    <>
      {features?.type === 'one' ? (
        <FeaturesTypeOne theme={theme} features={features} />
      ) : features?.type === 'two' ? (
        <FeaturesTypeTwo theme={theme} features={features} />
      ) : null}
    </>
  );
};

export default Features;
