import Link from 'next/link';
import ReactGA from 'react-ga4';

import { RestaurantDetailsQuery } from '../../../generated/graphql';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbars/Navbar/Navbar';
import Seo from '../../components/Seo/Seo';
import getRestaurantDetails from '../../utils/getRestaurantDetails';
import useStyles from '../terms-and-conditions/css';

export async function getServerSideProps() {
  const data = await getRestaurantDetails();

  return {
    props: {
      ...data,
    },
  };
}

const PrivacyPolicy = (props: RestaurantDetailsQuery) => {
  ReactGA.initialize([
    {
      trackingId: props.restaurantDetails.measurementId,
    },
  ]);

  const theme = props.restaurantDetails.theme;
  const styles = useStyles({
    theme,
  });

  return (
    <div
      style={{
        backgroundColor: props.restaurantDetails.theme.neutral,
        color: props.restaurantDetails.theme.primary,
      }}
    >
      <Seo restaurantDetails={props.restaurantDetails} />

      <main>
        <Navbar
          logo={props.restaurantDetails.logo}
          restaurantName={props.restaurantDetails.name}
          theme={props.restaurantDetails.theme}
          type={props.restaurantDetails.navbarType}
        />
        <Container>
          <div className={styles.termsContainer}>
            <div className={styles.termsUpdateDate}>
              <i>Last updated January 02, 2024</i>
            </div>
            <h1 className={styles.termsHeading}>
              <strong>Privacy Policy</strong>
            </h1>

            <div className={styles.termsSection}>
              <div className={styles.termsSubSection}>
                This privacy notice for {props.restaurantDetails.name} ("
                <strong>we</strong>," "<strong>us</strong>," or "
                <strong>our</strong>"), describes how and why we might collect,
                store, use, and/or share ("<strong>process</strong>") your
                information when you use our services ("
                <strong>Services</strong>"), such as when you:
              </div>
              <ul className={styles.termsList}>
                <li>
                  Visit our website at{' '}
                  <Link className={styles.termsLink} href={'/'}>
                    {props.restaurantDetails.domainUrl}
                  </Link>
                  , or any website of ours that links to this privacy notice
                </li>
                <li>
                  Engage with us in other related ways, including any sales,
                  marketing, or events
                </li>
              </ul>
              <div className={styles.termsSubSection}>
                Questions or concerns? Reading this privacy notice will help you
                understand your privacy rights and choices. If you do not agree
                with our policies and practices, please do not use our Services.
                If you still have any questions or concerns, please contact us
                at{' '}
                <a
                  className={styles.termsLink}
                  href={`mailto: ${props.restaurantDetails.email}`}
                >
                  {props.restaurantDetails.email}
                </a>
                .
              </div>
            </div>

            <div className={styles.termsSection}>
              <h2 className={styles.termsSectionTitle}>
                1. WHAT INFORMATION DO WE COLLECT?
              </h2>
              <h3 className={styles.termsSubTitle}>
                Personal information you disclose to us
              </h3>
              <div className={styles.termsSubSection}>
                <strong>In Short</strong>: We collect personal information that
                you provide to us.
              </div>
              <div className={styles.termsSubSection}>
                We collect personal information that you voluntarily provide to
                us when you express an interest in obtaining information about
                us or our products and Services, when you participate in
                activities on the Services, or otherwise when you contact us.
              </div>
              <div className={styles.termsSubSection}>
                Personal Information Provided by You. The personal information
                that we collect depends on the context of your interactions with
                us and the Services, the choices you make, and the products and
                features you use. The personal information we collect may
                include the following:
                <ul className={styles.termsList}>
                  <li>names</li>
                  <li>phone numbers</li>
                  <li>email addresses</li>
                  <li>mailing addresses</li>
                </ul>
                <strong>Sensitive Information</strong>. We do not process
                sensitive information.
              </div>

              <div className={styles.termsSubSection}>
                <strong>Payment Data</strong>. We may collect data necessary to
                process your payment if you make purchases, such as your payment
                instrument number, and the security code associated with your
                payment instrument. All payment data is stored by Stripe. You
                may find their privacy notice link(s) here:{' '}
                <a
                  href="https://stripe.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.termsLink}
                >
                  https://stripe.com/privacy
                </a>
                .
              </div>

              <div className={styles.termsSubSection}>
                All personal information that you provide to us must be true,
                complete, and accurate, and you must notify us of any changes to
                such personal information.
              </div>

              <h3 className={styles.termsSubTitle}>
                Information automatically collected
              </h3>

              <div className={styles.termsSubSection}>
                <strong>In Short</strong>: Some information — such as your
                Internet Protocol (IP) address and/or browser and device
                characteristics — is collected automatically when you visit our
                Services.
              </div>
              <div className={styles.termsSubSection}>
                We automatically collect certain information when you visit,
                use, or navigate the Services. This information does not reveal
                your specific identity (like your name or contact information)
                but may include device and usage information, such as your IP
                address, browser and device characteristics, operating system,
                language preferences, referring URLs, device name, country,
                location, information about how and when you use our Services,
                and other technical information. This information is primarily
                needed to maintain the security and operation of our Services,
                and for our internal analytics and reporting purposes.
              </div>
              <div className={styles.termsSubSection}>
                Like many businesses, we also collect information through
                cookies and similar technologies.
              </div>
              <div className={styles.termsSubSection}>
                The information we collect includes:
                <ul className={styles.termsList}>
                  <li>
                    Log and Usage Data. Log and usage data is service-related,
                    diagnostic, usage, and performance information our servers
                    automatically collect when you access or use our Services
                    and which we record in log files. Depending on how you
                    interact with us, this log data may include your IP address,
                    device information, browser type, and settings and
                    information about your activity in the Services (such as the
                    date/time stamps associated with your usage, pages and files
                    viewed, searches, and other actions you take such as which
                    features you use), device event information (such as system
                    activity, error reports (sometimes called "crash dumps"),
                    and hardware settings).
                  </li>
                  <li>
                    Device Data. We collect device data such as information
                    about your computer, phone, tablet, or other device you use
                    to access the Services. Depending on the device used, this
                    device data may include information such as your IP address
                    (or proxy server), device and application identification
                    numbers, location, browser type, hardware model, Internet
                    service provider and/or mobile carrier, operating system,
                    and system configuration information.
                  </li>
                  <li>
                    Location Data. We collect location data such as information
                    about your device's location, which can be either precise or
                    imprecise. How much information we collect depends on the
                    type and settings of the device you use to access the
                    Services. For example, we may use GPS and other technologies
                    to collect geolocation data that tells us your current
                    location (based on your IP address). You can opt out of
                    allowing us to collect this information either by refusing
                    access to the information or by disabling your Location
                    setting on your device. However, if you choose to opt out,
                    you may not be able to use certain aspects of the Services.
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.termsSection}>
              <h2 className={styles.termsSectionTitle}>
                2. HOW DO WE PROCESS YOUR INFORMATION?
              </h2>
              <div className={styles.termsSubSection}>
                <strong>In Short</strong>: We process your information to
                provide, improve, and administer our Services, communicate with
                you, for security and fraud prevention, and to comply with law.
                We may also process your information for other purposes with
                your consent.
              </div>
              <div className={styles.termsSubSection}>
                We process your personal information for a variety of reasons,
                depending on how you interact with our Services, including:
                <ul className={styles.termsList}>
                  <li>
                    <strong>
                      To deliver and facilitate delivery of services to the
                      user.
                    </strong>
                    {'  '} We may process your information to provide you with
                    the requested service.
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.termsSection}>
              <h2 className={styles.termsSectionTitle}>
                3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
              </h2>
              <div className={styles.termsSubSection}>
                <strong>In Short</strong>: We may share information in specific
                situations described in this section and/or with the following
                third parties.
              </div>
              <div className={styles.termsSubSection}>
                We may need to share your personal information in the following
                situations:
                <ul className={styles.termsList}>
                  <li>
                    <strong>Business Transfers. </strong>We may share or
                    transfer your information in connection with, or during
                    negotiations of, any merger, sale of company assets,
                    financing, or acquisition of all or a portion of our
                    business to another company.
                  </li>
                  <li>
                    <strong>When we use Google Maps Platform APIs.</strong> We
                    may share your information with certain Google Maps Platform
                    APIs (e.g., Google Maps API, Places API). We obtain and
                    store on your device ("cache") your location. You may revoke
                    your consent anytime by contacting us at the contact details
                    provided at the end of this document.
                  </li>
                  <li>
                    <strong>Affiliates.</strong> We may share your information
                    with our affiliates, in which case we will require those
                    affiliates to honor this privacy notice. Affiliates include
                    our parent company and any subsidiaries, joint venture
                    partners, or other companies that we control or that are
                    under common control with us.
                  </li>
                  <li>
                    <strong>Business Partners.</strong> We may share your
                    information with our business partners to offer you certain
                    products, services, or promotions.
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.termsSection}>
              <h2 className={styles.termsSectionTitle}>
                4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
              </h2>
              <div className={styles.termsSubSection}>
                <strong>In Short:</strong> We may use cookies and other tracking
                technologies to collect and store your information.
              </div>
              <div className={styles.termsSubSection}>
                We may use cookies and similar tracking technologies (like web
                beacons and pixels) to access or store information. Specific
                information about how we use such technologies and how you can
                refuse certain cookies is set out in our Cookie Notice.
              </div>
            </div>
            <div className={styles.termsSection}>
              <h2 className={styles.termsSectionTitle}>
                5. HOW LONG DO WE KEEP YOUR INFORMATION?
              </h2>
              <div className={styles.termsSubSection}>
                In Short: We keep your information for as long as necessary to
                fulfill the purposes outlined in this privacy notice unless
                otherwise required by law.
              </div>
              <div className={styles.termsSubSection}>
                We will only keep your personal information for as long as it is
                necessary for the purposes set out in this privacy notice,
                unless a longer retention period is required or permitted by law
                (such as tax, accounting, or other legal requirements).
              </div>
              <div className={styles.termsSubSection}>
                When we have no ongoing legitimate business need to process your
                personal information, we will either delete or anonymize such
                information, or, if this is not possible (for example, because
                your personal information has been stored in backup archives),
                then we will securely store your personal information and
                isolate it from any further processing until deletion is
                possible.
              </div>
            </div>
            <div className={styles.termsSection}>
              <h2 className={styles.termsSectionTitle}>
                6. HOW DO WE KEEP YOUR INFORMATION SAFE?
              </h2>
              <div className={styles.termsSubSection}>
                <strong>In Short:</strong> We aim to protect your personal
                information through a system of organizational and technical
                security measures.
              </div>
              <div className={styles.termsSubSection}>
                We have implemented appropriate and reasonable technical and
                organizational security measures designed to protect the
                security of any personal information we process. However,
                despite our safeguards and efforts to secure your information,
                no electronic transmission over the Internet or information
                storage technology can be guaranteed to be 100% secure, so we
                cannot promise or guarantee that hackers, cybercriminals, or
                other unauthorized third parties will not be able to defeat our
                security and improperly collect, access, steal, or modify your
                information. Although we will do our best to protect your
                personal information, transmission of personal information to
                and from our Services is at your own risk. You should only
                access the Services within a secure environment.
              </div>
            </div>
            <div className={styles.termsSection}>
              <h2 className={styles.termsSectionTitle}>
                7. DO WE COLLECT INFORMATION FROM MINORS?
              </h2>
              <div className={styles.termsSubSection}>
                <strong>In Short:</strong> We do not knowingly collect data from
                or market to children under 18 years of age.
              </div>
              <div className={styles.termsSubSection}>
                We do not knowingly solicit data from or market to children
                under 18 years of age. By using the Services, you represent that
                you are at least 18 or that you are the parent or guardian of
                such a minor and consent to such minor dependent's use of the
                Services. If we learn that personal information from users less
                than 18 years of age has been collected, we will deactivate the
                account and take reasonable measures to promptly delete such
                data from our records. If you become aware of any data we may
                have collected from children under age 18, please contact us at
                xhig7@gmail.com
              </div>
            </div>
            <div className={styles.termsSection}>
              <h2 className={styles.termsSectionTitle}>
                8. WHAT ARE YOUR PRIVACY RIGHTS?{' '}
              </h2>
              <div className={styles.termsSubSection}>
                In Short: You may review, change, or terminate your account at
                any time.
              </div>
              <div className={styles.termsSubSection}>
                Withdrawing your consent: If we are relying on your consent to
                process your personal information, which may be express and/or
                implied consent depending on the applicable law, you have the
                right to withdraw your consent at any time. You can withdraw
                your consent at any time by contacting us by using the contact
                details provided in the section "HOW CAN YOU CONTACT US ABOUT
                THIS NOTICE?" below.
              </div>
              <div className={styles.termsSubSection}>
                However, please note that this will not affect the lawfulness of
                the processing before its withdrawal nor, when applicable law
                allows, will it affect the processing of your personal
                information conducted in reliance on lawful processing grounds
                other than consent.
              </div>
              <div className={styles.termsSubSection}>
                <strong>
                  Opting out of marketing and promotional communications:
                </strong>{' '}
                You can unsubscribe from our marketing and promotional
                communications at any time by clicking on the unsubscribe link
                in the emails that we send, replying "STOP" or "UNSUBSCRIBE" to
                the SMS messages that we send, or by contacting us using the
                details provided in the section "HOW CAN YOU CONTACT US ABOUT
                THIS NOTICE?" below. You will then be removed from the marketing
                lists. However, we may still communicate with you — for example,
                to send you service-related messages that are necessary for the
                administration and use of your account, to respond to service
                requests, or for other non-marketing purposes.
              </div>
              <div>
                If you have questions or comments about your privacy rights, you
                may email us at {props.restaurantDetails.domainUrl}.
              </div>
            </div>
            <div className={styles.termsSection}>
              <h2 className={styles.termsSectionTitle}>
                9. CONTROLS FOR DO-NOT-TRACK FEATURES
              </h2>
              <div className={styles.termsSubSection}>
                Most web browsers and some mobile operating systems and mobile
                applications include a Do-Not-Track ("DNT") feature or setting
                you can activate to signal your privacy preference not to have
                data about your online browsing activities monitored and
                collected. At this stage no uniform technology standard for
                recognizing and implementing DNT signals has been finalized. As
                such, we do not currently respond to DNT browser signals or any
                other mechanism that automatically communicates your choice not
                to be tracked online. If a standard for online tracking is
                adopted that we must follow in the future, we will inform you
                about that practice in a revised version of this privacy notice.
              </div>
            </div>
            <div className={styles.termsSection}>
              <h2 className={styles.termsSectionTitle}>
                10. DO WE MAKE UPDATES TO THIS NOTICE?
              </h2>
              <div className={styles.termsSubSection}>
                <strong>In Short:</strong> Yes, we will update this notice as
                necessary to stay compliant with relevant laws.
              </div>
              <div className={styles.termsSubSection}>
                We may update this privacy notice from time to time. The updated
                version will be indicated by an updated "Revised" date and the
                updated version will be effective as soon as it is accessible.
                If we make material changes to this privacy notice, we may
                notify you either by prominently posting a notice of such
                changes or by directly sending you a notification. We encourage
                you to review this privacy notice frequently to be informed of
                how we are protecting your information.
              </div>
            </div>
            <div className={styles.termsSection}>
              <h2 className={styles.termsSectionTitle}>
                11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </h2>
              <div className={styles.termsSubSection}>
                {props.restaurantDetails.name}
              </div>
              <div className={styles.termsSubSection}>
                {props.restaurantDetails.address}
              </div>
              <div className={styles.termsSubSection}>
                <strong>Phone:</strong>{' '}
                <a
                  className={styles.termsLink}
                  href={`tel: ${props.restaurantDetails.phoneNumbers[0].number}`}
                >
                  {props.restaurantDetails.phoneNumbers[0].number}
                </a>
              </div>
              <div>
                <strong>Email:</strong>{' '}
                <a
                  className={styles.termsLink}
                  href={`mailto: ${props.restaurantDetails.email}`}
                >
                  {props.restaurantDetails.email}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer
        openingHours={props.restaurantDetails.openingHours}
        phoneNumbers={props.restaurantDetails.phoneNumbers}
        restaurantName={props.restaurantDetails.name}
        theme={props.restaurantDetails.theme}
      />
    </div>
  );
};

export default PrivacyPolicy;
