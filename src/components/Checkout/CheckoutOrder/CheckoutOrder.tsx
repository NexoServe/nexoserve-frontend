import ShoppingCart from '../../ShoppingCart/ShoppingCart/ShoppingCart';

import useStyles from './css';

const CheckoutOrder = () => {
  const classes = useStyles();
  return (
    <div className={classes.checkoutOrder}>
      <ShoppingCart isCheckout />
    </div>
  );
};

export default CheckoutOrder;
