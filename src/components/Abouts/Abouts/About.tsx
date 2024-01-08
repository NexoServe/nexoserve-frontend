import AboutTypeOne from '../AboutTypeOne/AboutTypeOne';
import AboutTypeTwo from '../AboutTypeTwo/AboutTypeTwo';

import { IAbout } from './types';

const About = ({ theme, aboutUs }: IAbout) => {
  return (
    <>
      {aboutUs?.type === 'one' ? (
        <AboutTypeOne theme={theme} aboutUs={aboutUs} />
      ) : aboutUs?.type === 'two' ? (
        <AboutTypeTwo theme={theme} aboutUs={aboutUs} />
      ) : null}
    </>
  );
};

export default About;
