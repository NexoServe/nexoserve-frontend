import { useEffect, useState } from 'react';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { useRecoilState, useRecoilValue } from 'recoil';

import colors from '../../../../css/colors';
import { useValidateShoppingCartLazyQuery } from '../../../../generated/graphql';
import { InfoModalAtom } from '../../../state/InfoModalState';
import { OrderIsPickUpAtom, OrderTimeAtom } from '../../../state/OrderNavbar';
import {
  ShoppingCartAtom,
  ShoppingCartTipAtom,
} from '../../../state/ShoppingCartState';
import getShoppingCartInput from '../../../utils/shoppingCartInput';
import RoundBorder from '../../RoundBorder/RoundBorder';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import CheckoutHeader from '../CheckoutHeader/CheckoutHeader';

import useStyles from './css';

const CheckoutPayment = () => {
  const classes = useStyles();
  const shoppingCart = useRecoilValue(ShoppingCartAtom);

  const shoppingCartTip = useRecoilValue(ShoppingCartTipAtom);
  const isPickUp = useRecoilValue(OrderIsPickUpAtom);
  const orderTime = useRecoilValue(OrderTimeAtom);

  const [validateShoppingCart, { data, error }] =
    useValidateShoppingCartLazyQuery();

  const [stripePromise, setStripePromise] = useState<Stripe | null>(null);
  const [, setInfoModal] = useRecoilState(InfoModalAtom);

  useEffect(() => {
    const fetchValidateShoppingCart = async () => {
      if (shoppingCart) {
        try {
          await validateShoppingCart({
            variables: {
              order: {
                restaurantId: process.env.NEXT_PUBLIC_RESTAURANT_ID as string,
                isPickUp: isPickUp,
                orderTime: orderTime?.value?.toString() as string,
                orderItems: getShoppingCartInput(),
                tip: shoppingCartTip.tip,
                isTipPercentage: shoppingCartTip.isTipPercentage,
              },
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
          setInfoModal({
            showModal: true,
          });
          return;
        }
      }
    };

    fetchValidateShoppingCart();
  }, [shoppingCart, shoppingCartTip]);

  useEffect(() => {
    if (error) {
      setInfoModal({
        showModal: true,
      });
    }
  }, [error]);

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
                ? parseFloat(
                    (data?.validateShoppingCart?.grandTotal * 100).toFixed(0),
                  )
                : 1,
              currency: 'usd',
              payment_method_types: ['card', 'cashapp', 'apple_pay'],
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
