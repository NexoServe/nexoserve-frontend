import Image from 'next/image';
import { useRouter } from 'next/router';

import Button from '../../Button/Button';
import SvgIcons from '../../SvgIcons';
import { IHero } from '../Hero/types';

import useStyles from './css';

const HeroTypeThree = ({ theme, hero, socialMedia }: IHero) => {
  const styles = useStyles({
    theme: theme,
  });

  const router = useRouter();

  return (
    <div className={styles.heroTypeThreeContainer}>
      <div className={styles.heroTypeThree}>
        <div>
          <h1 className={styles.heroTypeThreeTitle}>{hero?.title}</h1>
          <div className={styles.heroTypeThreeDescription}>
            {hero?.description}
          </div>
          <div className={styles.heroTypeThreeButtonContainer}>
            <div className={styles.heroTypeThreeButtonMessage}>
              * Order directly through our website for original prices and no
              extra fees. No 3rd parties.
            </div>
            <Button
              onClick={() => router.push('/order')}
              styleClass={styles.heroTypeThreeButton}
              theme={theme}
            >
              Order Now
            </Button>
          </div>
        </div>
        <div className={styles.heroTypeThreeBackgroundContainer}>
          <div className={styles.heroTypeThreeBackgroundImage}>
            <Image
              alt="1"
              fill
              style={{
                objectFit: 'cover',
              }}
              src={hero?.background as string}
              objectFit="cover"
            />
          </div>
        </div>
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
            <SvgIcons name="x" fill={theme.primary} />
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
            <SvgIcons name="facebook" fill={theme.primary} />
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
            <SvgIcons name="instagram" fill={theme.primary} />
          </a>
        )}
      </div>
      <div className={styles.heroTypeThreeBackground}></div>
    </div>
  );
};

export default HeroTypeThree;
