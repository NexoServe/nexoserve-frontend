import RoundBorder from '../../RoundBorder/RoundBorder';
import SvgIcons from '../../SvgIcons';
import CheckoutHeader from '../CheckoutHeader/CheckoutHeader';

import useStyles from './css';

const CheckoutDetails = () => {
  const classes = useStyles();

  return (
    <RoundBorder styleClass={classes.checkoutDetails}>
      <CheckoutHeader title="Delivery Details" />
      <div>
        <div className={classes.checkoutDetailsContentItem}>
          <div className={classes.checkoutDetailsHeader}>
            <SvgIcons name="car" width="40" height="20" />
            <h3 className={classes.checkoutDetailsContentItemTitle}>
              Address:
            </h3>
          </div>
          <div className={classes.checkoutDetailsBody}>
            <div>349 WhiteHall Rd.</div>
            <div>Albany, NY 12208</div>
          </div>
          <div className={classes.checkoutDetailsLink}>
            <a>Get Direction</a>
          </div>
          <div className={classes.checkoutDetailsButton}>
            <button>Edit</button>
          </div>
        </div>
        <div className={classes.checkoutDetailsContentItem}>
          <div className={classes.checkoutDetailsHeader}>
            <div className={classes.checkoutDetailsIcon}>
              <SvgIcons name="clock" width="30px" height="30px" />
            </div>
            <h3 className={classes.checkoutDetailsContentItemTitle}>
              Day and Time:
            </h3>
          </div>
          <div className={classes.checkoutDetailsBody}>
            <div>Today</div>
            <div>ASAP (15-30min)</div>
          </div>
          <div className={classes.checkoutDetailsButton}>
            <button>Edit</button>
          </div>
        </div>
      </div>
    </RoundBorder>
  );
};

export default CheckoutDetails;
