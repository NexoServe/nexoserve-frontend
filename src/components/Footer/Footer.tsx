import { DateTime } from 'luxon';
import Link from 'next/link';

import Container from '../Container/Container';
import { getRestaurantOpeningHours } from '../OrderNavbar/OrderInfo/helpers';
import SvgIcons from '../SvgIcons';

import useStyles from './css';
import { IFooter } from './types';

const Footer = ({
  openingHours,
  phoneNumbers,
  restaurantName,
  theme,
}: IFooter) => {
  const styles = useStyles({
    theme,
  });

  const openingHoursMap = getRestaurantOpeningHours(openingHours);

  return (
    <footer
      className={styles.footer}
      style={{
        backgroundImage: `linear-gradient(0deg, ${theme.primary} 0%, ${theme.primary}95 100%), url("https://us-east-menu-images.s3.amazonaws.com/igli_7_put_pizza_on_the_right_4dc04a34-8daf-4f76-85c0-0c904cfe5fbd+(2)+(1).png")`,
      }}
    >
      <Container>
        <div className={styles.footerWrapper}>
          <div className={styles.footerCard}>
            <h3 className={styles.footerTitle}>Navigation</h3>
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
              {openingHoursMap.map((openingHour, key) => (
                <div key={key} className={styles.footerOpeningHourRow}>
                  <div className={styles.footerOpeningHourWeekDay}>
                    {openingHour.dayOfWeek}
                  </div>
                  <div className={styles.footerOpeningHourText}>
                    {openingHour?.opens_at
                      ? `${DateTime.fromISO(
                          openingHour.opens_at as string,
                        ).toFormat('hh:mm a')} - ${DateTime.fromISO(
                          openingHour.closes_at as string,
                        ).toFormat('hh:mm a')}`
                      : 'Closed'}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className={styles.footerTitle}>Contact</h3>
            <div className={styles.footerPhoneWrapper}>
              {phoneNumbers?.map((phoneNumber) => (
                <a
                  key={phoneNumber.id}
                  className={styles.footerPhone}
                  href={`tel:${phoneNumber?.number}`}
                >
                  <SvgIcons name="phone" fill={theme.neutral} />
                  <div className={styles.footerPhoneNumber}>
                    {phoneNumber.number}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.footerCopyright}>
          <div className={styles.footerCopyrightText}>
            Copyright © Reserved by {restaurantName}
          </div>
          <div className={styles.footerCopyrightText}>
            Powered by{' '}
            <a
              href="https://nexoserve.com"
              target="_blank"
              rel="noreferrer"
              style={{
                color: theme.accent,
              }}
            >
              NexoServe
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
