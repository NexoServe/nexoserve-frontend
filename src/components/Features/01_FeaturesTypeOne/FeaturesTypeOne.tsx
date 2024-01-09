import Image from 'next/image';

import Container from '../../Container/Container';
import { IFeatures } from '../Feature/types';

import useStyles from './css';

const FeaturesTypeOne = ({ theme, features }: IFeatures) => {
  const styles = useStyles({
    theme: theme,
  });

  return (
    <Container styleClass={styles.features}>
      <div
        style={{
          opacity: 1,
          transform:
            'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
          transformStyle: 'preserve-3d',
        }}
        className={styles.featuresWrapper}
      >
        {features?.items?.map((featureItem) => (
          <div key={featureItem?.id} className={styles.featureWrapper}>
            <Image
              src={featureItem?.image as string}
              loading="lazy"
              alt="salad icon"
              width={120}
              height={120}
            />
            <h2 className={styles.featureTitle}>{featureItem?.title}</h2>
            <p className={styles.featureMessage}>{featureItem?.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FeaturesTypeOne;
