import { useEffect, useState } from 'react';

import { Elements } from '@stripe/react-stripe-js';
import {
  loadStripe,
  Stripe,
  StripeConstructorOptions,
} from '@stripe/stripe-js';
import { useRecoilState, useRecoilValue } from 'recoil';

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
import { ICheckoutPayment } from './types';

const CheckoutPayment = ({ theme }: ICheckoutPayment) => {
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

          const stripeOptions: StripeConstructorOptions | undefined =
            process.env.NEXT_PUBLIC_STRIPE_ACCOUNT_TYPE === 'standard'
              ? {
                  stripeAccount: process.env
                    .NEXT_PUBLIC_STRIPE_ACCOUNT_ID as string,
                }
              : undefined;

          if (!stripePromise) {
            const stripe = await loadStripe(
              process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
              stripeOptions,
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
      <RoundBorder styleClass={classes.checkoutPayment} theme={theme}>
        <CheckoutHeader title="Payment" theme={theme} />
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
              paymentMethodCreation: 'manual',
              appearance: {
                theme: 'stripe',
                variables: {
                  fontFamily: 'Montserrat, sans-serif',
                  fontSizeBase: '16px',
                  fontSizeSm: '16px',
                  colorBackground: theme.neutral,
                  colorText: theme.primary,
                  fontWeightMedium: '800',
                  fontWeightNormal: '500',
                  colorDanger: theme.tertiary,
                },
              },
            }}
          >
            <CheckoutForm theme={theme} />
          </Elements>
        )}
      </RoundBorder>
    </>
  );
};

export default CheckoutPayment;
