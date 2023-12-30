import OrderInfo from '../OrderInfo/OrderInfo';
import OrderTime from '../OrderTime/OrderTime';
import OrderType from '../OrderType/OrderType';

import useStyles from './css';
import { IOrderNavbarTop } from './types';

const OrderNavbarTop = ({ theme }: IOrderNavbarTop) => {
  const classes = useStyles();

  return (
    <div className={classes.orderNavbarTop}>
      <OrderInfo theme={theme} />
      <OrderType theme={theme} />
      <OrderTime theme={theme} />
    </div>
  );
};

export default OrderNavbarTop;
