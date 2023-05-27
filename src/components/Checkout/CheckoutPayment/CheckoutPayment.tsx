import { useEffect, useState } from 'react';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useRecoilValue } from 'recoil';

import colors from '../../../../css/colors';
import { useCheckoutCalculateMutMutation } from '../../../../generated/graphql';
import {
  ShoppingCartAtom,
  ShoppingCartTipAtom,
} from '../../../state/ShoppingCartState';
import getShoppingCartInput from '../../../utils/shoppingCartInput';
import RoundBorder from '../../RoundBorder/RoundBorder';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import CheckoutHeader from '../CheckoutHeader/CheckoutHeader';

import useStyles from './css';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
);

const CheckoutPayment = () => {
  const classes = useStyles();
  const shoppingCart = useRecoilValue(ShoppingCartAtom);
  const shoppingCartTip = useRecoilValue(ShoppingCartTipAtom);
  const [clientSecret, setClientSecret] = useState<string | null | undefined>(
    null,
  );
  const [checkoutCalculateMut] = useCheckoutCalculateMutMutation();

  useEffect(() => {
    const initializeStripeElements = async () => {
      if (shoppingCart) {
        try {
          const response = await checkoutCalculateMut({
            variables: {
              input: getShoppingCartInput({
                shoppingCartTip: shoppingCartTip,
              }),
            },
            context: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`,
            },
          });

          setClientSecret(response?.data?.CheckoutCalculateMut?.clientSecret);
        } catch (error) {
          console.error('Error calculating checkout:', error);
        }
      }
    };

    initializeStripeElements();
  }, [shoppingCart, shoppingCartTip, checkoutCalculateMut]);

  return (
    <RoundBorder styleClass={classes.checkoutPayment}>
      <CheckoutHeader title="Payment" />
      {clientSecret && (
        <Elements
          options={{
            clientSecret: clientSecret,
            appearance: {
              theme: 'stripe',
              variables: {
                fontFamily: 'Montserrat, sans-serif',
                fontSizeBase: '16px',
                fontSizeSm: '16px',
                colorBackground: colors.white,
                colorText: colors.black,
                fontWeightMedium: '800',
                fontWeightNormal: '500',
                colorDanger: colors.red,
              },
            },
          }}
          stripe={stripePromise}
        >
          <CheckoutForm />
        </Elements>
      )}
    </RoundBorder>
  );
};

export default CheckoutPayment;
