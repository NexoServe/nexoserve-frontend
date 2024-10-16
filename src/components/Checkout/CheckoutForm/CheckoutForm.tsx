import { FormEvent, useState } from 'react';

import {
  PaymentElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';
import SkeletonLoader from 'tiny-skeleton-loader-react';

import { base } from '../../../../css/base';
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
  OrderIsPickUpStateAtom,
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
import { ICheckoutForm } from './types';

export default function CheckoutForm({ theme }: ICheckoutForm) {
  const stripe = useStripe();
  const elements = useElements();
  const classes = useStyles({
    theme,
  });
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
  const isPickUp = useRecoilValue(OrderIsPickUpStateAtom);
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
            tip: parseFloat(shoppingCartTip.tip.toFixed(2)),
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
        if (createOrderRes?.error.code === ErrorCodes.StripeRequiresAction) {
          // Use Stripe.js to handle the required next action
          const errorData = JSON.parse(createOrderRes.error.data);

          const { error: handleNextActionError, paymentIntent } =
            // @ts-expect-error: unsupported types
            await stripe.handleNextAction({
              clientSecret: errorData.clientSecret as string,
            });

          if (paymentIntent.status === 'succeeded') {
            // Do something here
          }

          if (paymentIntent.last_payment_error) {
            setMessage(
              'Your payment was declined, please try another payment.',
            );

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
        } else if (createOrderRes.error.code === ErrorCodes.InvalidOrderTime) {
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
      {process.env.NEXT_PUBLIC_NODE_ENV !== 'production' && (
        <div style={{}}>
          <h5
            style={{
              fontWeight: 500,
              marginBottom: base(1),
              color: theme.primary,
            }}
          >
            THIS IS A TEST ENVIRONMENT. Use these cards to complete the order.
          </h5>
          <div
            style={{
              marginBottom: base(1),
            }}
          >
            <span
              style={{
                color: theme.secondary,
                fontWeight: 500,
              }}
            >
              Accepted Card:
            </span>{' '}
            <span
              style={{
                color: theme.primary,
              }}
            >
              4242 4242 4242 4242
            </span>
          </div>
          <div
            style={{
              marginBottom: base(1),
            }}
          >
            <span
              style={{
                color: theme.tertiary,
                fontWeight: 500,
              }}
            >
              Denied Card:
            </span>{' '}
            <span
              style={{
                color: theme.primary,
              }}
            >
              4000 0000 0000 0002
            </span>
          </div>
          <div
            style={{
              color: theme.primary,
            }}
          >
            Use any, Expiration, CVC and ZIP.
          </div>
          <div
            style={{
              marginBottom: base(2),
              color: theme.primary,
            }}
          >
            Please make sure to test both cards. Thank you :)
          </div>
        </div>
      )}
      <PaymentElement />

      <div
        style={{
          color: theme.primary,
          marginTop: base(4),
        }}
      >
        *By placing your order you accept our{' '}
        <Link
          style={{
            color: theme.primary,
          }}
          href={'/terms-and-conditions'}
        >
          Terms and Conditions
        </Link>{' '}
        and{' '}
        <Link
          style={{
            color: theme.primary,
          }}
          href={'/privacy-policy'}
        >
          Privacy Policy
        </Link>
        .
      </div>
      <Button
        id="submit"
        disabled={
          isLoading || !stripe || !elements || shoppingCartTotal.isLoading
        }
        title="Pay Now"
        style={{
          height: '60px',
          marginTop: base(1),
          marginBottom: '10px',
          fontSize: '16px',
          background: isLoading ? `${theme.accent}70` : theme.accent,
        }}
        theme={theme}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
          id="button-text"
        >
          {isLoading ? (
            <Loader styleClass={classes.checkoutFormButtonLoader} height={50} />
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
                <SkeletonLoader background={theme.primary} width={50} />
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
