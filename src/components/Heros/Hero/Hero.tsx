import HeroTypeOne from '../HeroTypeOne/HeroTypeOne';
import HeroTypeTwo from '../HeroTypeTwo/HeroTypeTwo';

import { IHero } from './types';

const Hero = ({ theme, hero, socialMedia }: IHero) => {
  return (
    <>
      {hero?.type === 'one' ? (
        <HeroTypeOne theme={theme} hero={hero} socialMedia={socialMedia} />
      ) : hero?.type === 'two' ? (
        <HeroTypeTwo theme={theme} hero={hero} socialMedia={socialMedia} />
      ) : null}
    </>
  );
};

export default Hero;
