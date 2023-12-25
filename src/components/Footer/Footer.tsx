import Link from 'next/link';

import Container from '../Container/Container';
import SvgIcons from '../SvgIcons';

import useStyles from './css';

const Footer = () => {
  const styles = useStyles();

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footerWrapper}>
          <div className={styles.footerCard}>
            <h3 className={styles.footerTitle}>Naivgation</h3>
            <nav className={styles.footerNav}>
              <Link className={styles.footerNavLink} href="/">
                Home
              </Link>
              <Link className={styles.footerNavLink} href="/">
                Gallery
              </Link>
              <Link className={styles.footerNavLink} href="/">
                Order Online
              </Link>
            </nav>
          </div>
          <div>
            <h3 className={styles.footerTitle}>Opening Hours</h3>
            <div className={styles.footerOpeningHours}>
              <div className={styles.footerOpeningHourRow}>
                <div className={styles.footerOpeningHourText}>Monday</div>
                <div className={styles.footerOpeningHourText}>
                  10:00 - 22:00
                </div>
              </div>
              <div className={styles.footerOpeningHourRow}>
                <div className={styles.footerOpeningHourText}>Tuesday</div>
                <div className={styles.footerOpeningHourText}>
                  10:00 - 22:00
                </div>
              </div>
              <div className={styles.footerOpeningHourRow}>
                <div className={styles.footerOpeningHourText}>Wednesday</div>
                <div className={styles.footerOpeningHourText}>
                  10:00 - 22:00
                </div>
              </div>
              <div className={styles.footerOpeningHourRow}>
                <div className={styles.footerOpeningHourText}>Thursday</div>
                <div className={styles.footerOpeningHourText}>
                  10:00 - 22:00
                </div>
              </div>
              <div className={styles.footerOpeningHourRow}>
                <div className={styles.footerOpeningHourText}>Friday</div>
                <div className={styles.footerOpeningHourText}>
                  10:00 - 22:00
                </div>
              </div>
              <div className={styles.footerOpeningHourRow}>
                <div className={styles.footerOpeningHourText}>Saturday</div>
                <div className={styles.footerOpeningHourText}>
                  10:00 - 22:00
                </div>
              </div>
              <div className={styles.footerOpeningHourRow}>
                <div className={styles.footerOpeningHourText}>Sunday</div>
                <div className={styles.footerOpeningHourText}>
                  10:00 - 22:00
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className={styles.footerTitle}>Contact</h3>
            <div className={styles.footerPhoneWrapper}>
              <a className={styles.footerPhone}>
                <SvgIcons name="phone" />
                <div className={styles.footerPhoneNumber}>(518) 888-0022</div>
              </a>
              <a className={styles.footerPhone}>
                <SvgIcons name="phone" />
                <div className={styles.footerPhoneNumber}>(518) 888-0022</div>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerCopyright}>
          <div className={styles.footerCopyrightText}>
            Copyright © Reserved by LaBella Pizza
          </div>
          <div className={styles.footerCopyrightText}>Powered by NexaServe</div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
