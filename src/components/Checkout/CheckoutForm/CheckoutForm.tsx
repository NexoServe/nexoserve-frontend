import { FormEvent, useEffect, useState } from 'react';

import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useRecoilState } from 'recoil';

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
import { ShoppingCartTotalAtom } from '../../../state/ShoppingCartState';
import Button from '../../Button/Button';

import useStyles from './css';

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const classes = useStyles();

  const [shoppingCartTotal, setShoppingCartTotal] = useRecoilState(
    ShoppingCartTotalAtom,
  );
  const [firstName, setFirstName] = useRecoilState(CheckoutFirstNameAtom);
  const [firstNameError, setFirstNameError] = useRecoilState(
    CheckoutFirstNameErrorAtom,
  );

  const [lastName, setLastName] = useRecoilState(CheckoutLastNameAtom);
  const [lastNameError, setLastNameError] = useRecoilState(
    CheckoutLastNameErrorAtom,
  );

  const [email, setEmail] = useRecoilState(CheckoutEmailAtom);
  const [emailError, setEmailError] = useRecoilState(CheckoutEmailErrorAtom);

  const [phone, setPhone] = useRecoilState(CheckoutPhoneNumberAtom);
  const [phoneError, setPhoneError] = useRecoilState(
    CheckoutPhoneNumberErrorAtom,
  );

  const [isCheckoutContactIncomplete, setIsCheckoutContactIncomplete] =
    useRecoilState(isCheckoutContactIncompleteAtom);

  const [message, setMessage] = useState<string | null | undefined>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret',
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case 'succeeded':
          setMessage('Payment succeeded!');
          break;
        case 'processing':
          setMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          break;
        default:
          setMessage('Something went wrong.');
          break;
      }
    });
  }, [stripe]);

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

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: `${window.location.origin}`,
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occurred.');
    }

    setIsLoading(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement
        id="payment-element"
        options={{
          wallets: {
            applePay: 'auto',
            googlePay: 'auto',
          },
        }}
      />

      <Button
        id="submit"
        disabled={isLoading || !stripe || !elements}
        title="Pay Now"
        style={{
          height: '60px',
          marginTop: '20px',
          marginBottom: '10px',
          fontSize: '16px',
        }}
      >
        <span id="button-text">
          {isLoading ? (
            <div className="spinner" id="spinner">
              Loading...
            </div>
          ) : (
            `Place Pick up order ($${shoppingCartTotal.grandTotal?.toFixed(2)})`
          )}
        </span>
      </Button>
      {message && (
        <div className={classes.checkoutFormError} id="payment-message">
          {message}
        </div>
      )}
    </form>
  );
}
