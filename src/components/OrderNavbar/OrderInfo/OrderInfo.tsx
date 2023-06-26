import SvgIcons from '../../SvgIcons';

import useStyles from './css';

const OrderInfo = () => {
  const classes = useStyles();

  return (
    <button className={classes.orderInfo}>
      <SvgIcons styleClass={classes.orderInfoIcon} name="info" />
      <div className={classes.orderInfoStatus}>
        <div className={classes.orderInfoStatusText}>Open until 10:30 PM</div>
        <div className={classes.orderInfoStatusIcon}></div>
      </div>
    </button>
  );
};

export default OrderInfo;
