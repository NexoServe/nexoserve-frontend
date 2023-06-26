import OrderInfo from '../OrderInfo/OrderInfo';
import OrderTime from '../OrderTime/OrderTime';
import OrderType from '../OrderType/OrderType';

import useStyles from './css';

const OrderNavbarTop = () => {
  const classes = useStyles();

  return (
    <div className={classes.orderNavbarTop}>
      <OrderInfo />
      <OrderType />
      <OrderTime />
    </div>
  );
};

export default OrderNavbarTop;
