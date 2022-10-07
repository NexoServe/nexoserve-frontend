import React from 'react';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useRecoilValue } from 'recoil';

import {
  useCheckoutCalculateMutMutation,
  useCheckoutCalculateQuery,
} from '../../../generated/graphql';
import { OrderAtom } from '../../state/ShoppingCartState';
import CheckoutForm from './components/CheckoutForm';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
);

const Checkout = () => {
  const cart = useRecoilValue(OrderAtom);
  const [checkoutCalculateMut, { data }] = useCheckoutCalculateMutMutation();
  const [clientSecret, setClientSecret] = React.useState('');

  console.log('cart', cart);

  React.useEffect(() => {
    if (cart) {
      checkoutCalculateMut({
        variables: {
          checkoutCalculateMutInput2: {
            orders: cart,
          },
        },
        context: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`,
        },
      });
    }
  }, [cart, checkoutCalculateMut]);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret: data?.CheckoutCalculateMut?.clientSecret,
    appearance,
  };

  return (
    <div className="App">
      {data?.CheckoutCalculateMut?.clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Checkout;
