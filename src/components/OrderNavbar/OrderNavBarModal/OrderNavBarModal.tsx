import { FormEvent, useEffect, useMemo, useState } from 'react';

import { DateTime, Interval } from 'luxon';
import { useRecoilState, useRecoilValue } from 'recoil';

import { useValidateOrderDetailsLazyQuery } from '../../../../generated/graphql';
import { FoodMenuAtom } from '../../../state/FoodModalState';
import { InfoModalAtom } from '../../../state/InfoModalState';
import {
  InfoModalIsPickUpAtom,
  OrderDateAtom,
  OrderDeliveryAdditionalAddressInfoAtom,
  OrderDeliveryAddressAtom,
  OrderDeliveryDetailsAtom,
  OrderDetailsAtom,
  OrderIsPickUpAtom,
  OrderIsPickUpStateAtom,
  OrderTime,
  OrderTimeAtom,
  ShowInfoModalAtom,
  ShowTimeModalAtom,
} from '../../../state/OrderNavbar';
import { RestaurantDetailsAtom } from '../../../state/RestaurantState';
import getHourAndMinute from '../../../utils/getHourAndMintue';
import Button from '../../Button/Button';
import Dropdown from '../../Dropdown/Dropdown';
import Loader from '../../Loader/Loader';
import ModalHeader from '../../ModalHeader/ModalHeader';
import OrderNavBarModalDelivery from '../OrderNavBarModalDelivery/OrderNavBarModalDelivery';

import useStyles from './css';
import { roundToNearest } from './helpers';
import { IOrderNavBarModal } from './types';

const OrderNavBarModal = ({
  setModal,
  headerText,
  type = 'pickup',
  error,
  theme,
}: IOrderNavBarModal) => {
  const [validateOrderDetails, { loading, error: validateOrderDetailsError }] =
    useValidateOrderDetailsLazyQuery({
      fetchPolicy: 'no-cache',
    });
  const [, setInfoModal] = useRecoilState(InfoModalAtom);

  useEffect(() => {
    if (validateOrderDetailsError) {
      setInfoModal({
        showModal: true,
      });
      setModal(false);
    }
  }, [validateOrderDetailsError]);

  const [restaurantDetails, setRestaurantDetails] = useRecoilState(
    RestaurantDetailsAtom,
  );
  const [orderDetails, setOrderDetails] = useRecoilState(OrderDetailsAtom);

  const classes = useStyles({
    theme,
  });

  const [orderTime, setOrderTime] = useRecoilState(OrderTimeAtom);
  const [orderDate, setOrderDate] = useRecoilState(OrderDateAtom);
  const [, setMenu] = useRecoilState(FoodMenuAtom);
  const [orderDateState, setOrderDateState] = useState<OrderTime>();
  const [orderTimeState, setOrderTimeState] = useState<OrderTime>();
  const [isAddressValid, setIsAddressValid] = useState<null | boolean>(null);
  const [isPickUp, setIsPickUp] = useRecoilState(OrderIsPickUpAtom);
  const [, setIsPickUpState] = useRecoilState(OrderIsPickUpStateAtom);
  const deliveryAddress = useRecoilValue(OrderDeliveryAddressAtom);
  const deliveryAdditionalAddressInfo = useRecoilValue(
    OrderDeliveryAdditionalAddressInfoAtom,
  );
  const deliveryDetails = useRecoilValue(OrderDeliveryDetailsAtom);
  const [, setShowTimeModal] = useRecoilState(ShowTimeModalAtom);
  const [, setShowInfoModal] = useRecoilState(ShowInfoModalAtom);
  const [, setInfoModalIsPickUp] = useRecoilState(InfoModalIsPickUpAtom);

  const [deliveryIsClosedForTheDay, setDeliveryIsClosedForTheDay] =
    useState(false);

  useEffect(() => {
    if (
      type === 'delivery' &&
      !orderDetails.isOpenNowDelivery &&
      orderDetails.isOpenNowPickUp
    ) {
      setDeliveryIsClosedForTheDay(true);
    } else {
      setDeliveryIsClosedForTheDay(false);
    }
  }, [orderDetails, type]);

  const now = DateTime.fromISO(orderDetails?.currentDateTime).setZone(
    restaurantDetails?.timezone,
  );
  const days: OrderTime[] = [];

  let dayCount = 0;
  let i = 0;

  const openingHours = isPickUp
    ? restaurantDetails.pickUpOpeningHours
    : restaurantDetails.deliveryOpeningHours;

  while (dayCount < 7) {
    const day = now.plus({ days: i });
    const dayOfWeek = day.toFormat('cccc'); // 'cccc' will give full weekday name in lowercase

    const dayDetails = openingHours.find(
      (item) => item.dayOfWeek === dayOfWeek,
    );

    if (dayDetails && dayDetails.time.length > 0) {
      // Convert the current time to a DateTime object

      // Check each time slot to see if the restaurant has opening hours after the current time
      let hasOpeningHoursAfterNow = false;
      for (const slot of dayDetails.time) {
        if (slot.closes_at) {
          const closesAtTime = day.set({
            year: day.year,
            month: day.month,
            day: day.day,
            hour: parseInt(slot.closes_at?.split(':')[0]),
            minute: parseInt(slot.closes_at?.split(':')[1]),
          });

          if (closesAtTime > now) {
            hasOpeningHoursAfterNow = true;
            break;
          }
        }
      }

      if (hasOpeningHoursAfterNow) {
        days.push({
          value: day,
          label: day.toFormat('EEE, MMM dd'),
        });
        dayCount++;
      }
    }

    i++;
  }

  const openingHoursForDay = openingHours.find(
    (day) => day.dayOfWeek === now.weekdayLong,
  );

  const allHoursAreInThePast = openingHoursForDay?.time.every((interval) => {
    if (interval.opens_at && interval.closes_at) {
      const openingTime = DateTime.fromFormat(interval?.opens_at, 'HH:mm', {
        zone: restaurantDetails?.timezone,
      }).set({
        day: now.day,
        month: now.month,
        year: now.year,
      });

      let closingTime = DateTime.fromFormat(interval?.closes_at, 'HH:mm', {
        zone: restaurantDetails?.timezone,
      }).set({
        day: now.day,
        month: now.month,
        year: now.year,
      });

      // If closingTime is before openingTime, it means the closingTime is on the next day
      if (closingTime < openingTime) {
        closingTime = closingTime.plus({ days: 1 });
      }

      return now > closingTime;
    }
  });

  if (
    allHoursAreInThePast &&
    (isPickUp ? orderDetails.isOpenNowPickUp : orderDetails.isOpenNowDelivery)
  ) {
    days.shift();
  } else if (days.length > 0 && days[0]?.value?.hasSame(now, 'day')) {
    days[0].label = 'Today';
  }

  useMemo(() => {
    if (!orderDate?.value) {
      setOrderDateState({
        label: days[0]?.label,
        value: days[0].value,
      });
    } else if (!isPickUp && !orderDetails?.isOpenNowDelivery) {
      setOrderDateState({
        label: days[0]?.label,
        value: DateTime.fromISO(days[0]?.value?.toString() as string).setZone(
          restaurantDetails?.timezone,
        ),
      });
    } else if (isPickUp && !orderDetails?.isOpenNowDelivery) {
      setOrderDateState({
        label: days[0]?.label,
        value: DateTime.fromISO(days[0]?.value?.toString() as string).setZone(
          restaurantDetails?.timezone,
        ),
      });
    } else {
      setOrderDateState({
        label: orderDate?.label,
        value:
          orderDate?.label === 'Today'
            ? now
            : DateTime.fromISO(orderDate?.value.toString()).setZone(
                restaurantDetails?.timezone,
              ),
      });
    }
  }, []);

  const dayHours =
    openingHours.find(
      (hours) => hours.dayOfWeek === orderDateState?.value?.weekdayLong,
    )?.time || [];

  let intervals = [];

  for (const period of dayHours) {
    if (period.opens_at && period.closes_at) {
      const openingTime = DateTime?.fromObject(
        {
          day: orderDateState?.value ? orderDateState.value.day : now.day,
          month: orderDateState?.value ? orderDateState.value.month : now.month,
          year: orderDateState?.value ? orderDateState.value.year : now.year,
          hour: parseInt(period?.opens_at?.split(':')[0]),
          minute: parseInt(period?.opens_at?.split(':')[1]),
        },
        {
          zone: restaurantDetails?.timezone,
        },
      );

      const closingTime = DateTime?.fromObject(
        {
          day: orderDateState?.value ? orderDateState.value.day : now.day,
          month: orderDateState?.value ? orderDateState.value.month : now.month,
          year: orderDateState?.value ? orderDateState.value.year : now.year,
          hour: parseInt(period?.closes_at?.split(':')[0]),
          minute: parseInt(period?.closes_at?.split(':')[1]),
        },
        {
          zone: restaurantDetails?.timezone,
        },
      );

      const offsetMinutes =
        type === 'pickup'
          ? restaurantDetails.pickUpOffset
          : restaurantDetails.deliveryOffset;

      const offsetOpeningTime = openingTime.plus({ minutes: offsetMinutes });

      const roundedOpeningTime = roundToNearest(
        openingTime.toFormat('hh:mm a') === '12:00 AM'
          ? openingTime
          : offsetOpeningTime,
        [0, 10, 15, 30, 45],
      );

      const timeInterval = Interval.fromDateTimes(
        roundedOpeningTime,
        closingTime,
      );

      intervals.push(
        ...Array.from(timeInterval.splitBy({ minutes: 15 }), (i) => i.start),
      );
    }
  }

  // Remove intervals that have already passed
  if (orderDateState?.value?.weekdayLong === now.weekdayLong) {
    intervals = intervals.filter(
      (interval) =>
        (interval as DateTime) >
        now.plus({
          minutes: isPickUp
            ? restaurantDetails.pickUpOffset
            : restaurantDetails.deliveryOffset,
        }),
    );
  }

  // Format the intervals
  const formattedIntervals = intervals.map((interval, i) => ({
    value: interval,
    label: interval?.toFormat('hh:mm a'),
  }));

  if (
    (isPickUp
      ? orderDetails.isOpenNowPickUp
      : orderDetails.isOpenNowDelivery) &&
    formattedIntervals &&
    formattedIntervals.length > 0 &&
    !allHoursAreInThePast &&
    orderDateState?.label === 'Today'
  ) {
    formattedIntervals[0].label = 'ASAP';
  }

  if (
    formattedIntervals.length === 0 &&
    (isPickUp ? orderDetails.isOpenNowPickUp : orderDetails.isOpenNowDelivery)
  ) {
    formattedIntervals.push({
      value: now,
      label: 'ASAP',
    });
  }

  useMemo(() => {
    if (orderTime?.value) {
      setOrderTimeState({
        label: orderTime?.label,
        value: orderTime?.value,
      });
    } else {
      if (
        orderTimeState?.value !== null &&
        !formattedIntervals.find(
          (interval) => interval.label === orderTimeState?.label,
        )
      ) {
        setOrderTimeState({
          label: formattedIntervals?.[0]?.label || null,
          value: formattedIntervals?.[0]?.value,
        });
      }
    }
  }, [orderDateState]);

  useEffect(() => {
    if (
      formattedIntervals?.find(
        (interval) => interval.label === orderTime?.label,
      ) === undefined
    ) {
      if (!orderDateState?.value) {
        return;
      }

      if (orderDateState?.value > now) {
        setOrderTimeState({
          label: formattedIntervals?.[0]?.label || null,
          value: formattedIntervals?.[0]?.value,
        });
      } else {
        setOrderTimeState({
          label: 'ASAP',
          value: now,
        });
      }
    }
  }, [orderDateState]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let hourMinutes;

    if (orderTimeState?.label !== 'ASAP' && orderTimeState?.label) {
      hourMinutes = getHourAndMinute(orderTimeState?.label);
    }

    const value = DateTime.fromObject({
      day: orderDateState?.value?.day,
      month: orderDateState?.value?.month,
      year: orderDateState?.value?.year,
      hour: hourMinutes ? hourMinutes?.hour : now.hour,
      minute: hourMinutes ? hourMinutes?.minute : now.minute,
    });

    if (
      orderTimeState?.label === 'ASAP' &&
      !(isPickUp
        ? orderDetails.isOpenNowPickUp
        : orderDetails.isOpenNowDelivery)
    ) {
      setOrderTimeState({
        label: formattedIntervals?.[0]?.label || null,
        value: formattedIntervals?.[0]?.value,
      });
    }
    try {
      const res = await validateOrderDetails({
        variables: {
          input: {
            restaurantId: process.env.NEXT_PUBLIC_RESTAURANT_ID as string,
            orderTime:
              orderTimeState?.label === 'ASAP' ? 'ASAP' : value.toString(),
            isPickUp: isPickUp,
            deliveryAddress: deliveryAddress,
            deliveryAddressAdditionalInfo: deliveryAdditionalAddressInfo,
            deliveryDetails: deliveryDetails,
          },
        },
      });

      if (!res.data) {
        //TODO: 404 page
        return;
      }

      setRestaurantDetails(res.data.validateOrderDetails.restaurantDetails);
      setOrderDetails(res.data.validateOrderDetails.orderDetails);
      setMenu(res.data.validateOrderDetails.restaurantDetails.menu);

      if (res.data.validateOrderDetails.orderDetails.isPickUp) {
        setIsPickUp(true);
        localStorage.setItem('isPickUp', JSON.stringify(true));
      } else {
        setIsPickUp(false);
        localStorage.setItem('isPickUp', JSON.stringify(false));
      }

      setOrderTime({
        label: orderTimeState?.label || null,
        value: value,
      });

      setOrderDate({
        label: orderDateState?.label || null,
        value: value,
      });

      localStorage.setItem(
        'orderTime',
        JSON.stringify({
          label: orderTimeState?.label,
          value: orderTimeState?.label === 'ASAP' ? 'ASAP' : value,
        }),
      );

      if (
        res.data.validateOrderDetails.orderDetails.isDeliveryAddressValid &&
        !res.data.validateOrderDetails.orderDetails.isPickUp
      ) {
        localStorage.setItem(
          'deliveryAddress',
          JSON.stringify(deliveryAddress),
        );
        localStorage.setItem(
          'deliveryAddiotionalInfo',
          JSON.stringify(deliveryAdditionalAddressInfo),
        );
        localStorage.setItem(
          'deliveryDetails',
          JSON.stringify(deliveryDetails),
        );
      } else {
        setIsPickUpState(true);
        setIsPickUp(true);
        localStorage.setItem('isPickUp', JSON.stringify(true));
      }

      setModal(false);
    } catch (error) {
      setInfoModal({
        showModal: true,
      });
      setModal(false);
    }
  };

  useEffect(() => {
    if (error) {
      setOrderTimeState({
        label: 'ASAP',
        value: null,
      });
    }
  }, [error]);

  return (
    <form onSubmit={handleSubmit} className={classes.orderNavbarModal}>
      <ModalHeader
        showCloseIcon={error ? false : true}
        text={headerText}
        onClick={() => setModal(false)}
        theme={theme}
      />

      <div className={classes.orderNavbarModalContent}>
        {error && <div className={classes.orderNavbarModalError}>{error}</div>}
        {deliveryIsClosedForTheDay && (
          <div>
            <div className={classes.orderNavbarModalError}>
              Delivery is currently closed. Pick up is available. You can still
              place a pick up order or place a delivery order in advanced.
            </div>

            <div className={classes.orderNavbarModalErrorInner}>
              <Button
                onClick={() => {
                  setIsPickUp(true);
                  setIsPickUpState(true);
                  setModal(false);
                  setShowTimeModal(true);
                }}
                theme={theme}
              >
                Place Pick Up Order
              </Button>
              <Button
                onClick={() => {
                  setIsPickUp(true);
                  setModal(false);
                  setInfoModalIsPickUp(false);
                  setShowInfoModal(true);
                }}
                theme={theme}
              >
                View Delivery Hours
              </Button>
            </div>
          </div>
        )}

        {type === 'delivery' && (
          <OrderNavBarModalDelivery
            setIsAddressValid={setIsAddressValid}
            isAddressValid={isAddressValid}
            setModal={setModal}
            theme={theme}
          />
        )}

        <Dropdown
          selectProps={{
            id: 'DateDropdown',
            options: days,
            onChange: (e) => setOrderDateState(e as OrderTime),
            defaultValue: days[0],
            value: orderDateState,
          }}
          label="Date"
          theme={theme}
        />

        <Dropdown
          selectProps={{
            id: 'TimeDropdown',
            options: formattedIntervals,
            onChange: (e) => setOrderTimeState(e as OrderTime),
            defaultValue: formattedIntervals[0],
            value: orderTimeState?.value === null ? null : orderTimeState,
          }}
          label="Time"
          theme={theme}
        />

        <Button
          disabled={
            (!isAddressValid && type === 'delivery') ||
            (!(isPickUp
              ? orderDetails.isOpenNowPickUp
              : orderDetails.isOpenNowDelivery) &&
              orderTimeState?.label === 'ASAP')
          }
          type="submit"
          styleClass={classes.orderNavbarModalButton}
          theme={theme}
        >
          {loading ? (
            <Loader
              height={50}
              styleClass={classes.orderNavbarModalButtonLoader}
            />
          ) : (
            'Add Details'
          )}
        </Button>
      </div>
    </form>
  );
};

export default OrderNavBarModal;
