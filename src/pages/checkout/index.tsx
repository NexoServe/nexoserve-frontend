import CheckoutContact from '../../components/Checkout/CheckoutContact/CheckoutContact';
import CheckoutDetails from '../../components/Checkout/CheckoutDetails/CheckoutDetails';
import CheckoutOrder from '../../components/Checkout/CheckoutOrder/CheckoutOrder';
import CheckoutPayment from '../../components/Checkout/CheckoutPayment/CheckoutPayment';
import Container from '../../components/Container/Container';

import useStyles from './css';

const Checkout = () => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.checkout}>
        <CheckoutDetails />
        <CheckoutContact />
        <CheckoutOrder />
        <CheckoutPayment />
      </div>
    </Container>
  );
};

export default Checkout;
