import { useEffect, useMemo } from 'react';

import { DateTime } from 'luxon';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';

import {
  OrderTypeEnum,
  useRestaurantLazyQuery,
} from '../../../generated/graphql';
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
import InfoModal from '../InfoModal/InfoModal';
import Loader from '../Loader/Loader';
import { ModalPopUp } from '../Modal/Modal';
import OrderNavBarModal from '../OrderNavbar/OrderNavBarModal/OrderNavBarModal';

import { IPageContainer } from './types';

const PageContainer = ({ children, theme }: IPageContainer) => {
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
    'deliveryAdditionalInfo',
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
    if (
      !orderDeliveryAddressParsed &&
      data?.restaurant.restaurantDetails.services?.length === 1 &&
      data?.restaurant.restaurantDetails.services[0] === OrderTypeEnum.Delivery
    ) {
      setShowInvalidTimeModal({
        type: 'delivery',
        errorMessages:
          'Please add a delivery address to place an order for delivery.',
      });
    } else if (orderDetails?.isOrderTimeValid === false) {
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

      if (
        data?.restaurant.restaurantDetails.services?.length === 1 &&
        data?.restaurant.restaurantDetails.services[0] ===
          OrderTypeEnum.Delivery
      ) {
        setIsPickUp(false);
        localStorage.setItem('isPickUp', JSON.stringify(false));
      } else if (
        data?.restaurant.restaurantDetails.services?.length === 1 &&
        data?.restaurant.restaurantDetails.services[0] ===
          OrderTypeEnum.Delivery
      ) {
        setIsPickUp(true);
        localStorage.setItem('isPickUp', JSON.stringify(true));
      } else if (data.restaurant.orderDetails.isPickUp === true) {
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
        localStorage.removeItem('deliveryAdditionalInfo');
        localStorage.removeItem('deliveryDetails');
      }
    }
  }, [data]);

  return (
    <>
      {loading && (
        <ModalPopUp
          theme={theme}
          onClose={() => console.log()}
          showModal={loading}
        >
          <Loader />
        </ModalPopUp>
      )}

      {data && (
        <div>
          {children}

          <ModalPopUp
            theme={theme}
            showModal={showInvalidTimeModal ? true : false}
            onClose={() => {
              console.log();
            }}
          >
            <OrderNavBarModal
              headerText="Date and Time"
              setModal={() => setShowInvalidTimeModal(undefined)}
              type={showInvalidTimeModal?.type}
              error={showInvalidTimeModal?.errorMessages}
              theme={theme}
            />
          </ModalPopUp>
        </div>
      )}

      <InfoModal theme={theme} />
    </>
  );
};

export default PageContainer;
