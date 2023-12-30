import ShoppingCart from '../../ShoppingCart/ShoppingCart/ShoppingCart';

import useStyles from './css';
import { ICheckoutOrder } from './types';

const CheckoutOrder = ({ theme }: ICheckoutOrder) => {
  const classes = useStyles();
  return (
    <div className={classes.checkoutOrder}>
      <ShoppingCart theme={theme} isCheckout />
    </div>
  );
};

export default CheckoutOrder;
