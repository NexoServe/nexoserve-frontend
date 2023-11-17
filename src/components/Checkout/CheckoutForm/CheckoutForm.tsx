import { FormEvent, useState } from 'react';

import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';
import SkeletonLoader from 'tiny-skeleton-loader-react';

import colors from '../../../../css/colors';
import {
  ErrorCodes,
  OrderDetailsType,
  useCreateOrderMutation,
} from '../../../../generated/graphql';
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
import { InfoModalAtom } from '../../../state/InfoModalState';
import {
  OrderDeliveryAdditionalAddressInfoAtom,
  OrderDeliveryAddressAtom,
  OrderDeliveryDetailsAtom,
  OrderDetailsAtom,
  OrderIsPickUpAtom,
  OrderShowInvalidTimeModalAtom,
  OrderTimeAtom,
} from '../../../state/OrderNavbar';
import {
  ShoppingCartAtom,
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
  const router = useRouter();

  const [, setOrderDetails] = useRecoilState(OrderDetailsAtom);

  const [, setShowInvalidTimeModal] = useRecoilState(
    OrderShowInvalidTimeModalAtom,
  );
  const [, setShoppingCart] = useRecoilState(ShoppingCartAtom);
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

  const orderTime = useRecoilValue(OrderTimeAtom);
  const isPickUp = useRecoilValue(OrderIsPickUpAtom);
  const deliveryAddress = useRecoilValue(OrderDeliveryAddressAtom);
  const additionalAddressInfo = useRecoilValue(
    OrderDeliveryAdditionalAddressInfoAtom,
  );
  const deliveryDetails = useRecoilValue(OrderDeliveryDetailsAtom);

  const [message, setMessage] = useState<string | null | undefined>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [createOrder] = useCreateOrderMutation();
  const shoppingCartTip = useRecoilValue(ShoppingCartTipAtom);
  const [, setInfoModalState] = useRecoilState(InfoModalAtom);

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

    if (!orderTime) {
      setShowInvalidTimeModal({
        errorMessages:
          'Something went wrong. Please pick a time and try again.',
        type: 'pickup',
      });
      return;
    }

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    // Trigger form validation and wallet collection
    // @ts-expect-error: unsupported types
    const { error: submitError } = await elements.submit();
    if (submitError) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setInfoModalState({
      showModal: true,
      title: 'Processing Payment.',
      infoModalType: 'payment',
    });

    // Create the PaymentMethod using the details collected by the Payment Element
    const { error: createPaymentMethodError, paymentMethod } =
      await stripe.createPaymentMethod({
        // @ts-expect-error: unsupported types
        elements,
        params: {
          billing_details: {
            name: `${firstName} ${lastName}`,
          },
        },
      });

    if (createPaymentMethodError) {
      // This point is only reached if there's an immediate error when
      // creating the PaymentMethod. Show the error to your customer (for example, payment details incomplete)
      setMessage(submitError?.message);
      setInfoModalState({
        type: 'error',
        infoModalType: 'payment',
        message: submitError?.message,
        showModal: true,
        title: 'Payment Error!',
      });
      setIsLoading(false);
      return;
    }

    try {
      const res = await createOrder({
        variables: {
          order: {
            restaurantId: process.env.NEXT_PUBLIC_RESTAURANT_ID as string,
            isPickUp,
            orderTime:
              orderTime?.label === 'ASAP'
                ? 'ASAP'
                : (orderTime?.value?.toString() as string),
            orderItems: getShoppingCartInput(),
            tip: shoppingCartTip.tip,
            isTipPercentage: shoppingCartTip.isTipPercentage,
            deliveryAddress,
            suiteAptFloor: additionalAddressInfo,
            deliveryDetails,
            guestFirstName: firstName,
            guestLastName: lastName,
            guestEmail: email,
            guestPhone: phone,
          },
          paymentMethodId: paymentMethod?.id,
        },
        context: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`,
        },
      });

      const createOrderRes = res.data?.CreateOrder;

      if (createOrderRes?.error) {
        if (createOrderRes.error.code === ErrorCodes.InvalidOrderTime) {
          const errorData = JSON.parse(createOrderRes.error.data);
          setInfoModalState({
            showModal: false,
          });
          setOrderDetails(errorData as OrderDetailsType);

          setShowInvalidTimeModal({
            errorMessages:
              'We need a little extra time to prepare your order. Please select a later time.',
            type: 'pickup',
          });
        } else if (
          createOrderRes.error.message === ErrorCodes.InvalidDeliveryAddress
        ) {
          setShowInvalidTimeModal({
            errorMessages:
              'The address that you have selected is not valid. Please select a different address.',
            type: 'delivery',
          });
        } else if (ErrorCodes.StripePaymentError) {
          setInfoModalState({
            type: 'error',
            infoModalType: 'payment',
            message: createOrderRes.error?.message,
            showModal: true,
            title: 'Payment Error',
          });
        }

        setIsLoading(false);

        return;
      }

      if (createOrderRes?.data?.stripeStatus === 'requires_action') {
        // Use Stripe.js to handle the required next action
        const { error: handleNextActionError, paymentIntent } =
          // @ts-expect-error: unsupported types
          await stripe.handleNextAction({
            clientSecret: createOrderRes.data.clientSecret,
          });

        if (paymentIntent.last_payment_error) {
          setMessage('Your payment was declined, please try another payment.');

          setInfoModalState({
            showModal: true,
            infoModalType: 'payment',
            type: 'error',
            title: 'Payment Declined',
            message: paymentIntent.last_payment_error.message,
          });

          return;
        }

        if (paymentIntent.status === 'requires_action') {
          setInfoModalState({
            showModal: true,
            infoModalType: 'payment',
            type: 'error',
            title: 'Payment Error',
            message: 'The customer stopped this payment.',
          });

          setIsLoading(false);
          return;
        }

        if (handleNextActionError || !paymentIntent) {
          // Show error from Stripe.js in payment form
          setMessage(handleNextActionError.message);
          setInfoModalState({
            type: 'error',
            infoModalType: 'payment',
            message: handleNextActionError.message,
            showModal: true,
            title: 'Payment Error',
          });

          setIsLoading(false);
          return;
        }
      }

      setMessage(null);
    } catch (error: any) {
      setInfoModalState({
        showModal: true,
      });
      return;
    }

    setIsLoading(false);
    setInfoModalState({
      type: 'success',
      infoModalType: 'payment',
      showModal: true,
      title: 'Payment Accepted!',
      message: 'You are being redirected shortly.',
    });

    setTimeout(() => {
      setInfoModalState({
        showModal: false,
      });

      setShoppingCart([]);
      localStorage.setItem('shoppingCartItems', JSON.stringify([]));
      localStorage.setItem(
        'orderTime',
        JSON.stringify({ label: 'ASAP', value: 'ASAP' }),
      );
      localStorage.setItem('isPickUp', JSON.stringify(true));

      router.push('/confirmation');
    }, 2000);
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
