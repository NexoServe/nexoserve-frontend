import { FormEvent, useState } from 'react';

import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useRecoilState, useRecoilValue } from 'recoil';
import SkeletonLoader from 'tiny-skeleton-loader-react';

import colors from '../../../../css/colors';
import { useCheckoutCalculateMutMutation } from '../../../../generated/graphql';
import {
  CheckoutEmailAtom,
  CheckoutEmailErrorAtom,
  CheckoutFirstNameAtom,
  CheckoutFirstNameErrorAtom,
  CheckoutLastNameAtom,
  CheckoutLastNameErrorAtom,
  CheckoutPhoneNumberAtom,
  CheckoutPhoneNumberErrorAtom,
  isCheckoutContactIncompleteAtom,
} from '../../../state/CheckoutState';
import {
  ShoppingCartTipAtom,
  ShoppingCartTotalAtom,
} from '../../../state/ShoppingCartState';
import getShoppingCartInput from '../../../utils/shoppingCartInput';
import Button from '../../Button/Button';
import Loader from '../../Loader/Loader';

import useStyles from './css';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const classes = useStyles();

  const shoppingCartTotal = useRecoilValue(ShoppingCartTotalAtom);
  const firstName = useRecoilValue(CheckoutFirstNameAtom);
  const [, setFirstNameError] = useRecoilState(CheckoutFirstNameErrorAtom);

  const lastName = useRecoilValue(CheckoutLastNameAtom);
  const [, setLastNameError] = useRecoilState(CheckoutLastNameErrorAtom);

  const email = useRecoilValue(CheckoutEmailAtom);
  const [, setEmailError] = useRecoilState(CheckoutEmailErrorAtom);

  const phone = useRecoilValue(CheckoutPhoneNumberAtom);
  const [, setPhoneError] = useRecoilState(CheckoutPhoneNumberErrorAtom);

  const [, setIsCheckoutContactIncomplete] = useRecoilState(
    isCheckoutContactIncompleteAtom,
  );

  const [message, setMessage] = useState<string | null | undefined>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [checkoutCalculateMut] = useCheckoutCalculateMutMutation();
  const shoppingCartTip = useRecoilValue(ShoppingCartTipAtom);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsCheckoutContactIncomplete(false);

    if (firstName === '') {
      setFirstNameError(true);
    }

    if (lastName === '') {
      setLastNameError(true);
    }

    if (email === '') {
      setEmailError(true);
    }

    if (phone === '') {
      setPhoneError(true);
    }

    if (firstName === '' || lastName === '' || email === '' || phone === '') {
      setIsCheckoutContactIncomplete(true);
      return;
    }

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    // Trigger form validation and wallet collection
    // @ts-expect-error: unsupported types
    const { error: submitError } = await elements.submit();
    if (submitError) {
      setMessage(submitError.message);
      setIsLoading(false);
      return;
    }

    // Create the PaymentMethod using the details collected by the Payment Element
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      // @ts-expect-error: unsupported types
      elements,
      params: {
        billing_details: {
          name: `${firstName} ${lastName}`,
        },
      },
    });

    if (error) {
      // This point is only reached if there's an immediate error when
      // creating the PaymentMethod. Show the error to your customer (for example, payment details incomplete)
      setMessage(submitError.message);
      setIsLoading(false);
      return;
    }

    try {
      const res = await checkoutCalculateMut({
        variables: {
          input: getShoppingCartInput({
            shoppingCartTip: shoppingCartTip,
          }),
          paymentMethodId: paymentMethod.id,
        },
        context: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`,
        },
      });

      if (res.data?.CheckoutCalculateMut.status === 'requires_action') {
        // Use Stripe.js to handle the required next action
        // @ts-expect-error: unsupported types
        const { error, paymentIntent } = await stripe.handleNextAction({
          clientSecret: res.data.CheckoutCalculateMut.clientSecret,
        });

        if (paymentIntent.last_payment_error) {
          if (
            paymentIntent.last_payment_error.decline_code ===
            'cashapp_customer_request_declined'
          ) {
            setMessage(
              'Your payment was declined, please try another payment.',
            );
          } else {
            setMessage(
              'Something went wrong with your payment. Please try again or try a different method of payment.',
            );
          }
        }

        if (error) {
          // Show error from Stripe.js in payment form
          setMessage(error.message);
        } else {
          // Actions handled, show success message
        }
      }
    } catch (error) {
      setMessage(
        'Something went wrong with your payment. Please try again or try a different method of payment.',
      );
    }
    setMessage(null);
    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement options={{}} />

      <Button
        id="submit"
        disabled={
          isLoading || !stripe || !elements || shoppingCartTotal.isLoading
        }
        title="Pay Now"
        style={{
          height: '60px',
          marginTop: '20px',
          marginBottom: '10px',
          fontSize: '16px',
          background: isLoading ? 'rgba(238, 231, 165, 0.7)' : colors.primary,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          id="button-text"
        >
          {isLoading ? (
            <Loader width="50px" height="50px" scale={0.5} />
          ) : (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div style={{ whiteSpace: 'nowrap' }}>Place Pick up order (</div>
              {shoppingCartTotal.isLoading ? (
                <SkeletonLoader background={colors.darkGray} width={50} />
              ) : (
                `$${shoppingCartTotal.grandTotal?.toFixed(2)}`
              )}
              )
            </div>
          )}
        </div>
      </Button>
      {message && (
        <div className={classes.checkoutFormError} id="payment-message">
          {message}
        </div>
      )}
    </form>
  );
}
