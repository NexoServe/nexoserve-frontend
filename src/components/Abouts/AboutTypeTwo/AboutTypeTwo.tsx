import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { base } from '../../../../css/base';
import Button from '../../Button/Button';
import Container from '../../Container/Container';
import { IAbout } from '../Abouts/types';

import useStyles from './css';

const AboutTypeTwo = ({ theme, aboutUs }: IAbout) => {
  const styles = useStyles({
    theme: theme,
  });

  const router = useRouter();

  return (
    <div className={styles.aboutUsTypeTwo}>
      <Container>
        <div className={styles.aboutUsTwoWrapper}>
          <div className={styles.imageGrid}>
            <div
              style={{
                opacity: 1,
                transform:
                  'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d',
              }}
              className={styles.largeImage1}
            >
              <Image
                src={aboutUs?.imageOne as string}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                alt="store"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className={styles.aboutUsContent}>
            <h2 className={styles.aboutUsTitle}>{aboutUs?.title}</h2>
            <p className={styles.aboutUsMessage}>{aboutUs?.description}</p>

            <Button
              style={{
                height: base(6),
                maxWidth: base(30),
                marginTop: base(2),
              }}
              onClick={() => router.push('/order')}
              theme={theme}
            >
              Order Now
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutTypeTwo;
