'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Lottie from 'react-lottie';

import scrollLottie from '../../../lottie/scroll.json';
import Button from '../../Button/Button';
import SvgIcons from '../../SvgIcons';
import { IHero } from '../Hero/types';

import useStyles from './css';

const HeroTypeOne = ({ theme, hero, socialMedia }: IHero) => {
  const { classes } = useStyles({
    theme: theme,
  });

  const router = useRouter();

  return (
    <div className={classes.heroTypeOneContainer}>
      <Image alt="1" fill src={hero?.background as string} objectFit="cover" />
      <Image
        alt="1"
        src={hero?.foreground as string}
        objectFit="cover"
        fill
        className={classes.heroTypeOneForeground}
      />
      <div className={classes.heroTypeOne}>
        <h1 className={classes.heroTypeOneTitle}>{hero?.title}</h1>
        <div className={classes.heroTypeOneDescription}>
          {hero?.description}
        </div>
        <div className={classes.heroTypeOneButtonContainer}>
          <div className={classes.heroTypeOneButtonMessage}>
            * Order directly through our website for original prices and no
            extra fees. No 3rd parties.
          </div>
          <Button
            onClick={() => router.push('/order')}
            styleClass={classes.heroTypeOneButton}
            theme={theme}
          >
            Order Now
          </Button>
        </div>
        <div className={classes.heroTypeOneSocials}>
          {socialMedia?.xTwitterUrl && (
            <a
              className={classes.heroTypeOneSocial}
              href={socialMedia?.xTwitterUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit our X Page"
            >
              <SvgIcons name="x" fill={theme.primary} />
            </a>
          )}

          {socialMedia?.facebookUrl && (
            <a
              href={socialMedia?.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className={classes.heroTypeOneSocial}
              aria-label="Visit our Facebook Page"
            >
              <SvgIcons name="facebook" fill={theme.primary} />
            </a>
          )}

          {socialMedia?.instagramUrl && (
            <a
              href={socialMedia?.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit our Instagram Page"
              className={classes.heroTypeOneSocial}
            >
              <SvgIcons name="instagram" fill={theme.primary} />
            </a>
          )}
        </div>
        <div className={classes.heroTypeOneScroll}>
          <Lottie
            options={{
              animationData: scrollLottie,
              autoplay: true,
              loop: true,
            }}
            height={50}
            isClickToPauseDisabled={true}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroTypeOne;
