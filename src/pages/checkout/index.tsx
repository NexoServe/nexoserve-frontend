import { useEffect } from 'react';

import { loadStripe } from '@stripe/stripe-js';
import { useRecoilValue } from 'recoil';

import { useCheckoutCalculateMutMutation } from '../../../generated/graphql';
import CheckoutContact from '../../components/Checkout/CheckoutContact/CheckoutContact';
import CheckoutDetails from '../../components/Checkout/CheckoutDetails/CheckoutDetails';
import CheckoutOrder from '../../components/Checkout/CheckoutOrder/CheckoutOrder';
import CheckoutPayment from '../../components/Checkout/CheckoutPayment/CheckoutPayment';
import Container from '../../components/Container/Container';
import {
  ShoppingCartAtom,
  ShoppingCartTipAtom,
} from '../../state/ShoppingCartState';
import getShoppingCartInput from '../../utils/shoppingCartInput';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
);

const Checkout = () => {
  const shoppingCart = useRecoilValue(ShoppingCartAtom);
  const shoppingCartTip = useRecoilValue(ShoppingCartTipAtom);
  const [checkoutCalculateMut, { data }] = useCheckoutCalculateMutMutation();

  useEffect(() => {
    if (shoppingCart) {
      checkoutCalculateMut({
        variables: {
          input: getShoppingCartInput({
            shoppingCartTip: shoppingCartTip,
          }),
        },
        context: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`,
        },
      });
    }
  }, [shoppingCart, checkoutCalculateMut]);

  return (
    <Container>
      <CheckoutDetails />
      <CheckoutContact />
      <CheckoutOrder />
      <CheckoutPayment />
    </Container>
  );
};

export default Checkout;
