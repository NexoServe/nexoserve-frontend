import { useEffect, useState } from 'react';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { useRecoilValue } from 'recoil';

import colors from '../../../../css/colors';
import { useValidateShoppingCartLazyQuery } from '../../../../generated/graphql';
import {
  ShoppingCartAtom,
  ShoppingCartTipAtom,
  ShoppingCartTotalAtom,
} from '../../../state/ShoppingCartState';
import getShoppingCartInput from '../../../utils/shoppingCartInput';
import RoundBorder from '../../RoundBorder/RoundBorder';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import CheckoutHeader from '../CheckoutHeader/CheckoutHeader';

import useStyles from './css';

const CheckoutPayment = () => {
  const classes = useStyles();
  const shoppingCart = useRecoilValue(ShoppingCartAtom);
  const shoppingCartTotal = useRecoilValue(ShoppingCartTotalAtom);
  const shoppingCartTip = useRecoilValue(ShoppingCartTipAtom);

  const [validateShoppingCart, { data }] = useValidateShoppingCartLazyQuery();

  const [stripePromise, setStripePromise] = useState<Stripe | null>(null);

  useEffect(() => {
    const fetchValidateShoppingCart = async () => {
      if (shoppingCart) {
        try {
          await validateShoppingCart({
            variables: {
              input: getShoppingCartInput({
                shoppingCartTip: shoppingCartTip,
              }),
            },
            context: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`,
            },
          });

          if (!stripePromise) {
            const stripe = await loadStripe(
              process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
            );

            setStripePromise(stripe);
          }
        } catch (error) {
          console.error('Error validating shoppingCart:', error);
        }
      }
    };

    fetchValidateShoppingCart();
  }, [shoppingCart, shoppingCartTip]);

  console.log('data', data);
  console.log('shoppingCartTotal', shoppingCartTotal);

  return (
    <>
      <RoundBorder styleClass={classes.checkoutPayment}>
        <CheckoutHeader title="Payment" />
        {stripePromise !== undefined && (
          <Elements
            stripe={stripePromise}
            options={{
              // @ts-expect-error: unsupported types
              mode: 'payment',
              amount: data?.validateShoppingCart?.grandTotal
                ? data?.validateShoppingCart?.grandTotal * 100
                : 1,
              currency: 'usd',
              payment_method_types: ['card', 'cashapp'],
              paymentMethodCreation: 'manual',
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
          >
            <CheckoutForm />
          </Elements>
        )}
      </RoundBorder>
    </>
  );
};

export default CheckoutPayment;
