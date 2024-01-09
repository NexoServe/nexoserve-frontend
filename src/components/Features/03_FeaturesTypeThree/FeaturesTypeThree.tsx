import Image from 'next/image';

import Container from '../../Container/Container';
import { IFeatures } from '../Feature/types';

import useStyles from './css';

const FeaturesTypeThree = ({ theme, features }: IFeatures) => {
  const styles = useStyles({
    theme: theme,
  });

  return (
    <Container styleClass={styles.featuresTypeTwo}>
      <h2 className={styles.featuresTypeTwoTitle}>{features?.title}</h2>
      <div className={styles.featuresWrapper}>
        {features?.items?.map((featureItem) => (
          <div key={featureItem?.id} className={styles.featureWrapper}>
            <div className={styles.featuresTypeTwoImage}>
              <Image
                src={featureItem?.image as string}
                loading="lazy"
                alt="salad icon"
                width={100}
                height={100}
              />
            </div>
            <h2 className={styles.featureTitle}>{featureItem?.title}</h2>
            <p className={styles.featureMessage}>{featureItem?.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FeaturesTypeThree;
