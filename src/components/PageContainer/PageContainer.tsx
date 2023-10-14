import { useEffect, useMemo } from 'react';

import { AnimatePresence } from 'framer-motion';
import { DateTime } from 'luxon';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import { useRestaurantLazyQuery } from '../../../generated/graphql';
import { FoodMenuAtom } from '../../state/FoodModalState';
import {
  OrderDateAtom,
  OrderDeliveryAdditionalAddressInfoAtom,
  OrderDeliveryAddressAtom,
  OrderDeliveryDetailsAtom,
  OrderDetailsAtom,
  OrderIsPickUpAtom,
  OrderShowInvalidTimeModalAtom,
  OrderTimeAtom,
} from '../../state/OrderNavbar';
import { RestaurantDetailsAtom } from '../../state/RestaurantState';
import Loader from '../Loader/Loader';
import { ModalPopUp } from '../Modal/Modal';
import OrderNavBarModal from '../OrderNavbar/OrderNavBarModal/OrderNavBarModal';

import { IPageContainer } from './types';

const PageContainer = ({ children }: IPageContainer) => {
  const router = useRouter();

  const [showInvalidTimeModal, setShowInvalidTimeModal] = useRecoilState(
    OrderShowInvalidTimeModalAtom,
  );
  const [, setRestaurantDetails] = useRecoilState(RestaurantDetailsAtom);
  const [orderDetails, setOrderDetails] = useRecoilState(OrderDetailsAtom);
  const [, setMenu] = useRecoilState(FoodMenuAtom);
  const [, setOrderTime] = useRecoilState(OrderTimeAtom);
  const [, setOrderDate] = useRecoilState(OrderDateAtom);
  const [, setIsPickUp] = useRecoilState(OrderIsPickUpAtom);
  const [, setDeliveryAddress] = useRecoilState(OrderDeliveryAddressAtom);
  const [, setAdditionalAddressInfo] = useRecoilState(
    OrderDeliveryAdditionalAddressInfoAtom,
  );
  const [, setDeliveryDetails] = useRecoilState(OrderDeliveryDetailsAtom);

  const orderTimeStorage = localStorage.getItem('orderTime');
  const orderIsPickUpStorage = localStorage.getItem('isPickUp');
  const orderDeliveryAddressStorage = localStorage.getItem('deliveryAddress');
  const orderDeliveryAddressAdditionalInfoStorage = localStorage.getItem(
    'deliveryAddiotionalInfo',
  );
  const orderDeliveryDetails = localStorage.getItem('deliveryDetails');

  if (!orderTimeStorage) {
    localStorage.setItem(
      'orderTime',
      JSON.stringify({ label: 'ASAP', value: 'ASAP' }),
    );
  }

  let orderTimeParsed: { label: string; value: string } | null = null;

  let orderDeliveryAddressParsed: string;
  let orderDeliveryAddressAdditionalInfoParsed: string;
  let orderDeliveryDetailsParsed: string;

  try {
    orderTimeParsed = JSON.parse(orderTimeStorage as string);
    orderDeliveryAddressParsed = JSON.parse(
      orderDeliveryAddressStorage as string,
    );

    orderDeliveryAddressAdditionalInfoParsed = JSON.parse(
      orderDeliveryAddressAdditionalInfoStorage as string,
    );
    orderDeliveryDetailsParsed = JSON.parse(orderDeliveryDetails as string);
  } catch (error) {
    // localStorage.removeItem('orderTime');
  }

  const [restaurantQuery, { data, loading, error }] = useRestaurantLazyQuery({
    fetchPolicy: 'no-cache',
  });

  if (error) {
    router.push('/404');
  }

  useEffect(() => {
    if (orderDetails?.isOrderTimeValid === false) {
      //TODO HANDLE ERROR message
      setShowInvalidTimeModal({
        type: 'pickup',
        errorMessages:
          data?.restaurant.orderDetails.isOpenNowPickUp ||
          data?.restaurant.orderDetails.isOpenNowDelivery
            ? 'Sorry, we need a little extra time. Please select a new time.'
            : "Sorry, we're currently closed. You can still place an order in advanced.",
      });
    }
  }, [orderDetails?.isOrderTimeValid, setShowInvalidTimeModal]);

  useEffect(() => {
    restaurantQuery({
      variables: {
        input: {
          restaurantId: process.env.NEXT_PUBLIC_RESTAURANT_ID as string,
          orderTime: orderTimeParsed ? orderTimeParsed?.value : 'ASAP',
          isPickUp: orderIsPickUpStorage === 'true' ? true : false,
          deliveryAddress: orderDeliveryAddressParsed,
          deliveryAddressAdditionalInfo:
            orderDeliveryAddressAdditionalInfoParsed,
          deliveryDetails: orderDeliveryDetailsParsed,
        },
      },
    });
  }, []);

  useMemo(() => {
    if (!loading && data?.restaurant) {
      setMenu(data?.restaurant.restaurantDetails.menu);

      setRestaurantDetails(data.restaurant.restaurantDetails);
      setOrderDetails(data.restaurant.orderDetails);

      console.log('restaurant', data.restaurant);

      if (data.restaurant.orderDetails.isPickUp === true) {
        setIsPickUp(true);
        localStorage.setItem('isPickUp', JSON.stringify(true));
      } else {
        if (data.restaurant.orderDetails.isDeliveryAddressValid) {
          setIsPickUp(false);
          localStorage.setItem('isPickUp', JSON.stringify(false));
        } else {
          setIsPickUp(true);
          localStorage.setItem('isPickUp', JSON.stringify(true));
        }
      }

      if (data.restaurant.orderDetails.isOrderTimeValid && orderTimeParsed) {
        setOrderTime({
          label: orderTimeParsed?.label,
          value: DateTime.fromISO(orderTimeParsed?.value as string),
        });

        const isToday = DateTime.fromISO(
          orderTimeParsed?.value as string,
        ).hasSame(
          DateTime.fromISO(
            data?.restaurant.orderDetails.currentDateTime as string,
          ),
          'day',
        );

        const dateTime = DateTime.fromISO(orderTimeParsed?.value as string);
        const dateTimeWithZone = dateTime.setZone(
          data.restaurant.restaurantDetails.timezone,
        );

        setOrderDate((prevState) => ({
          ...prevState,
          label:
            orderTimeParsed?.value === 'ASAP'
              ? 'Today'
              : isToday
              ? 'Today'
              : DateTime.fromISO(orderTimeParsed?.value as string).toFormat(
                  'EEE, MMM dd',
                ),
          value: dateTimeWithZone,
        }));
      }

      if (data.restaurant.orderDetails.isDeliveryAddressValid) {
        if (!data.restaurant.orderDetails.isPickUp) {
          setDeliveryAddress(
            data.restaurant.orderDetails.deliveryAddress as string,
          );

          if (
            data.restaurant.orderDetails.deliveryAddressAdditionalInfo !==
              undefined &&
            data.restaurant.orderDetails.deliveryAddressAdditionalInfo !== null
          ) {
            setAdditionalAddressInfo(
              data.restaurant.orderDetails.deliveryAddressAdditionalInfo,
            );
          }
          if (data.restaurant.orderDetails.deliveryDetails) {
            setDeliveryDetails(
              data.restaurant.orderDetails.deliveryDetails as string,
            );
          }
        }
      } else {
        localStorage.removeItem('deliveryAddress');
        localStorage.removeItem('deliveryAddiotionalInfo');
        localStorage.removeItem('deliveryDetails');
      }
    }
  }, [data]);

  if (loading)
    return (
      <AnimatePresence>
        {loading && (
          <ModalPopUp showModal={loading}>
            <Loader />
          </ModalPopUp>
        )}
      </AnimatePresence>
    );
  return (
    <div>
      {children}

      <AnimatePresence>
        {showInvalidTimeModal && (
          <ModalPopUp
            showModal={showInvalidTimeModal ? true : false}
            onClose={() => {
              console.log();
            }}
          >
            <OrderNavBarModal
              headerText="Date and Time"
              setModal={() => setShowInvalidTimeModal(undefined)}
              type={showInvalidTimeModal.type}
              error={showInvalidTimeModal.errorMessages}
            />
          </ModalPopUp>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PageContainer;
