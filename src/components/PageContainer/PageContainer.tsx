import { useEffect, useMemo, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { DateTime } from 'luxon';
import { useRecoilState } from 'recoil';

import { useRestaurantLazyQuery } from '../../../generated/graphql';
import { FoodMenuAtom } from '../../state/FoodModalState';
import {
  OrderDateAtom,
  OrderDeliveryAdditionalAddressInfoAtom,
  OrderDeliveryAddressAtom,
  OrderDeliveryDetailsAtom,
  OrderIsPickUpAtom,
  OrderOpeningHoursAtom,
  OrderTimeAtom,
} from '../../state/OrderNavbar';
import Loader from '../Loader/Loader';
import { ModalPopUp } from '../Modal/Modal';
import OrderNavBarModal from '../OrderNavbar/OrderNavBarModal/OrderNavBarModal';

import { IPageContainer } from './types';

const PageContainer = ({ children }: IPageContainer) => {
  const [showInvalidTimeModal, setShowInvalidTimeModal] = useState(false);

  const [, setOpeningHours] = useRecoilState(OrderOpeningHoursAtom);
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

  let orderTimeParsed: { label: string; value: string } | null = null;
  let orderIsPickUpParsed: boolean;
  let orderDeliveryAddressParsed: string;
  let orderDeliveryAddressAdditionalInfoParsed: string;
  let orderDeliveryDetailsParsed: string;

  try {
    orderTimeParsed = JSON.parse(orderTimeStorage as string);
    orderDeliveryAddressParsed = JSON.parse(
      orderDeliveryAddressStorage as string,
    );
    orderIsPickUpParsed = JSON.parse(orderIsPickUpStorage as string);
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

  useEffect(() => {
    restaurantQuery({
      variables: {
        input: {
          restaurantId: process.env.NEXT_PUBLIC_RESTAURANT_ID as string,
          orderTime: orderTimeParsed ? orderTimeParsed?.value : 'ASAP',
          isPickUp: orderIsPickUpParsed ? orderIsPickUpParsed : true,
          deliveryAddress: orderDeliveryAddressParsed,
          deliveryAddressAdditionalInfo:
            orderDeliveryAddressAdditionalInfoParsed,
          deliveryDetails: orderDeliveryDetailsParsed,
        },
      },
    });
  }, []);

  useMemo(() => {
    if (!loading && !error && data?.restaurant) {
      setMenu(data?.restaurant.menu);

      if (!data.restaurant?.isOrderTimeValid) {
        setShowInvalidTimeModal(true);
      } else {
        setShowInvalidTimeModal(false);
      }

      setOpeningHours({
        address: data?.restaurant.address,
        location: {
          latitude: data?.restaurant.location.latitude,
          longitude: data?.restaurant.location.longitude,
        },
        openingHours: data?.restaurant.openingHours,
        isOpenNow: data?.restaurant.isOpenNow,
        currentDateTime: data?.restaurant.currentDateTime,
        isOrderTimeValid: data?.restaurant.isOrderTimeValid,
        timezone: data?.restaurant.timezone,
      });

      if (data.restaurant.isOrderTimeValid && orderTimeParsed) {
        setOrderTime({
          label: orderTimeParsed?.label,
          value: DateTime.fromISO(orderTimeParsed?.value as string),
        });

        const isToday = DateTime.fromISO(
          orderTimeParsed?.value as string,
        ).hasSame(
          DateTime.fromISO(data?.restaurant.currentDateTime as string),
          'day',
        );

        const dateTime = DateTime.fromISO(orderTimeParsed?.value as string);
        const dateTimeWithZone = dateTime.setZone(data.restaurant.timezone);

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
      if (data.restaurant.isDeliveryAddressValid) {
        if (!data.restaurant.isPickUp) {
          setIsPickUp(false);
          setDeliveryAddress(data.restaurant.deliveryAddress as string);
          console.log(
            'data.restaurant.deliveryAddressAdditionalInfo',
            data.restaurant.deliveryAddressAdditionalInfo,
          );
          if (
            data.restaurant.deliveryAddressAdditionalInfo !== undefined &&
            data.restaurant.deliveryAddressAdditionalInfo !== null
          ) {
            setAdditionalAddressInfo(
              data.restaurant.deliveryAddressAdditionalInfo,
            );
          }
          if (data.restaurant.deliveryDetails) {
            setDeliveryDetails(data.restaurant.deliveryDetails as string);
          }
        }
      } else {
        setIsPickUp(true);
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
            showModal={showInvalidTimeModal}
            onClose={() => {
              console.log();
            }}
          >
            <OrderNavBarModal
              headerText="Date and Time"
              setModal={setShowInvalidTimeModal}
              error={
                !data?.restaurant?.isOpenNow
                  ? "Sorry, we're currently closed. You can still place an order in advanced"
                  : 'Sorry, we need a little extra time. Please select a new time.'
              }
            />
          </ModalPopUp>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PageContainer;
