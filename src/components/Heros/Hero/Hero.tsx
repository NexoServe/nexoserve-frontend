import HeroTypeOne from '../01_HeroTypeOne/HeroTypeOne';
import HeroTypeTwo from '../02_HeroTypeTwo/HeroTypeTwo';
import HeroTypeThree from '../03_HeroTypeThree/HeroTypeThree';

import { IHero } from './types';

const Hero = ({ theme, hero, socialMedia }: IHero) => {
  return (
    <>
      {hero?.type === 'one' ? (
        <HeroTypeOne theme={theme} hero={hero} socialMedia={socialMedia} />
      ) : hero?.type === 'two' ? (
        <HeroTypeTwo theme={theme} hero={hero} socialMedia={socialMedia} />
      ) : hero?.type === 'three' ? (
        <HeroTypeThree theme={theme} hero={hero} socialMedia={socialMedia} />
      ) : null}
    </>
  );
};

export default Hero;
