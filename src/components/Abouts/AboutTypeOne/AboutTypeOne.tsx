import Image from 'next/image';

import Container from '../../Container/Container';
import { IAbout } from '../Abouts/types';

import useStyles from './css';

const AboutTypeOne = ({ theme, aboutUs }: IAbout) => {
  const styles = useStyles({
    theme: theme,
  });

  return (
    <div className={styles.aboutUs}>
      <Container>
        <div className={styles.aboutUsWrapper}>
          <div className={styles.aboutUsContent}>
            <h2 className={styles.aboutUsTitle}>{aboutUs?.title}</h2>
            <p className={styles.aboutUsMessage}>{aboutUs?.description}</p>
          </div>

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
                alt="salad icon"
                width={500}
                height={500}
              />
            </div>
            <div
              id="w-node-div-block-15-085088a6"
              data-w-id="Div Block 15"
              style={{
                opacity: 1,
                transform:
                  'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d',
              }}
              className={styles.smallImage1}
            >
              <Image
                src={aboutUs?.imageTwo as string}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                alt="salad icon"
                width={500}
                height={500}
              />
            </div>
            <div
              id="w-node-div-block-17-085088a6"
              data-w-id="Div Block 17"
              style={{
                opacity: 1,
                transform:
                  'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d',
              }}
              className={styles.smallImage2}
            >
              <Image
                src={aboutUs?.imageThree as string}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                alt="salad icon"
                width={500}
                height={500}
              />
            </div>
            <div
              data-w-id="Div Block 16"
              style={{
                opacity: 1,
                transform:
                  'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                transformStyle: 'preserve-3d',
              }}
              className={styles.largeImage2}
            >
              <Image
                src={aboutUs?.imageFour as string}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                }}
                alt="salad icon"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutTypeOne;
