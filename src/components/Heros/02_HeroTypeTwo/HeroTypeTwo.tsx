import Image from 'next/image';
import { useRouter } from 'next/router';

import Button from '../../Button/Button';
import SvgIcons from '../../SvgIcons';
import { IHero } from '../Hero/types';

import useStyles from './css';

const HeroTypeTwo = ({ theme, hero, socialMedia }: IHero) => {
  const styles = useStyles({
    theme: theme,
  });

  const router = useRouter();

  return (
    <div className={styles.heroTypeTwoContainer}>
      <Image alt="1" fill src={hero?.background as string} objectFit="cover" />
      <div className={styles.heroTypeTwoForeground}></div>
      <div className={styles.heroTypeTwo}>
        <h1 className={styles.heroTypeTwoTitle}>{hero?.title}</h1>
        <div className={styles.heroTypeTwoDescription}>{hero?.description}</div>
        <div className={styles.heroTypeOneButtonContainer}>
          <div className={styles.heroTypeTwoButtonMessage}>
            * Order directly through our website for original prices and no
            extra fees. No 3rd parties.
          </div>
          <Button
            onClick={() => router.push('/order')}
            styleClass={styles.heroTypeTwoButton}
            theme={theme}
          >
            Order Now
          </Button>
        </div>
        <div className={styles.heroTypeOneSocials}>
          {socialMedia?.xTwitterUrl && (
            <a
              className={styles.heroTypeOneSocial}
              href={socialMedia?.xTwitterUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit our X Page"
            >
              <SvgIcons name="x" fill={theme.neutral} />
            </a>
          )}

          {socialMedia?.facebookUrl && (
            <a
              href={socialMedia?.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.heroTypeOneSocial}
              aria-label="Visit our Facebook Page"
            >
              <SvgIcons name="facebook" fill={theme.neutral} />
            </a>
          )}

          {socialMedia?.instagramUrl && (
            <a
              href={socialMedia?.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit our Instagram Page"
              className={styles.heroTypeOneSocial}
            >
              <SvgIcons name="instagram" fill={theme.neutral} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroTypeTwo;
