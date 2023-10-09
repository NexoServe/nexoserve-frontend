import { FormEvent, useEffect, useMemo, useState } from 'react';

import { DateTime, Interval } from 'luxon';
import { useRecoilState, useRecoilValue } from 'recoil';

import { useValidateOrderDetailsLazyQuery } from '../../../../generated/graphql';
import { FoodMenuAtom } from '../../../state/FoodModalState';
import {
  OrderDateAtom,
  OrderDeliveryAdditionalAddressInfoAtom,
  OrderDeliveryAddressAtom,
  OrderDeliveryDetailsAtom,
  OrderDetailsAtom,
  OrderIsPickUpAtom,
  OrderTime,
  OrderTimeAtom,
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
}: IOrderNavBarModal) => {
  const [validateOrderDetails, { loading }] = useValidateOrderDetailsLazyQuery({
    fetchPolicy: 'no-cache',
  });

  const [restaurantDetails, setRestaurantDetails] = useRecoilState(
    RestaurantDetailsAtom,
  );
  const [orderDetails, setOrderDetails] = useRecoilState(OrderDetailsAtom);

  const classes = useStyles();

  const [orderTime, setOrderTime] = useRecoilState(OrderTimeAtom);
  const [orderDate, setOrderDate] = useRecoilState(OrderDateAtom);
  const [, setMenu] = useRecoilState(FoodMenuAtom);
  const [orderDateState, setOrderDateState] = useState<OrderTime>();
  const [orderTimeState, setOrderTimeState] = useState<OrderTime>();
  const [isAddressValid, setIsAddressValid] = useState<null | boolean>(null);
  const [isPickUp, setIsPickUp] = useRecoilState(OrderIsPickUpAtom);
  const deliveryAddress = useRecoilValue(OrderDeliveryAddressAtom);
  const deliveryAdditionalAddressInfo = useRecoilValue(
    OrderDeliveryAdditionalAddressInfoAtom,
  );
  const deliveryDetails = useRecoilValue(OrderDeliveryDetailsAtom);

  const now = DateTime.fromISO(orderDetails?.currentDateTime as string).setZone(
    restaurantDetails?.timezone,
  );
  const days: OrderTime[] = [];

  let dayCount = 0;
  let i = 0;

  while (dayCount < 7) {
    const day = now.plus({ days: i });
    const dayOfWeek = day.toFormat('cccc').toLowerCase(); // 'cccc' will give full weekday name in lowercase

    const dayDetails = restaurantDetails.openingHours.find(
      (item) => item.dayOfWeek === dayOfWeek,
    );

    if (dayDetails && dayDetails.time.length > 0) {
      days.push({
        value: day,
        label: day.toFormat('EEE, MMM dd'),
      });
      dayCount++;
    }

    i++;
  }

  const openingHoursForDay = restaurantDetails?.openingHours.find(
    (day) => day.dayOfWeek === now.weekdayLong?.toLowerCase(),
  );

  const allHoursAreInThePast = openingHoursForDay?.time.every((interval) => {
    const openingTime = DateTime.fromFormat(
      interval?.opens_at as string,
      'HH:mm',
      {
        zone: restaurantDetails?.timezone,
      },
    ).set({
      day: now.day,
      month: now.month,
      year: now.year,
    });

    let closingTime = DateTime.fromFormat(
      interval?.closes_at as string,
      'HH:mm',
      {
        zone: restaurantDetails?.timezone,
      },
    ).set({
      day: now.day,
      month: now.month,
      year: now.year,
    });

    // If closingTime is before openingTime, it means the closingTime is on the next day
    if (closingTime < openingTime) {
      closingTime = closingTime.plus({ days: 1 });
    }

    return now > closingTime;
  });

  if (allHoursAreInThePast && orderDetails.isOpenNow) {
    days.shift();
  } else if (orderDetails.isOpenNow) {
    days[0].label = 'Today';
  }

  useMemo(() => {
    if (!orderDate?.value) {
      setOrderDateState({
        label: days[0]?.label,
        value: days[0].value,
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
    restaurantDetails?.openingHours.find(
      (hours) =>
        hours.dayOfWeek.toLowerCase() ===
        orderDateState?.value?.weekdayLong?.toLowerCase(),
    )?.time || [];

  let intervals = [];

  for (const period of dayHours) {
    const openingTime = DateTime?.fromObject(
      {
        day: orderDateState?.value ? orderDateState.value.day : now.day,
        month: orderDateState?.value ? orderDateState.value.month : now.month,
        year: orderDateState?.value ? orderDateState.value.year : now.year,
        hour: parseInt(period?.opens_at?.split(':')[0] as string),
        minute: parseInt(period?.opens_at?.split(':')[1] as string),
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
        hour: parseInt(period?.closes_at?.split(':')[0] as string),
        minute: parseInt(period?.closes_at?.split(':')[1] as string),
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

  // Remove intervals that have already passed
  if (
    orderDateState?.value?.weekdayLong?.toLowerCase() ===
    now.weekdayLong?.toLowerCase()
  ) {
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
    orderDetails?.isOpenNow &&
    formattedIntervals &&
    formattedIntervals.length > 0 &&
    !allHoursAreInThePast &&
    orderDateState?.label === 'Today'
  ) {
    formattedIntervals[0].label = 'ASAP';
  }

  if (formattedIntervals.length === 0 && orderDetails?.isOpenNow) {
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
          label: formattedIntervals?.[0]?.label as string,
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
          label: formattedIntervals?.[0]?.label as string,
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

    if (orderTimeState?.label !== 'ASAP') {
      hourMinutes = getHourAndMinute(orderTimeState?.label as string);
    }

    const value = DateTime.fromObject({
      day: orderDateState?.value?.day,
      month: orderDateState?.value?.month,
      year: orderDateState?.value?.year,
      hour: hourMinutes ? hourMinutes?.hour : now.hour,
      minute: hourMinutes ? hourMinutes?.minute : now.minute,
    });

    if (orderTimeState?.label === 'ASAP' && !orderDetails?.isOpenNow) {
      setOrderTimeState({
        label: formattedIntervals?.[0]?.label as string,
        value: formattedIntervals?.[0]?.value,
      });
    }

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
      label: orderTimeState?.label as string,
      value: value,
    });

    setOrderDate({
      label: orderDateState?.label as string,
      value: value,
    });

    localStorage.setItem(
      'orderTime',
      JSON.stringify({
        label: orderTimeState?.label,
        value: orderTimeState?.label === 'ASAP' ? 'ASAP' : value,
      }),
    );

    console.log(
      'res.data.validateOrderDetails.orderDetails.isDeliveryAddressValid',
      res.data.validateOrderDetails.orderDetails.isDeliveryAddressValid,
    );

    if (
      res.data.validateOrderDetails.orderDetails.isDeliveryAddressValid &&
      !res.data.validateOrderDetails.orderDetails.isPickUp
    ) {
      localStorage.setItem('deliveryAddress', JSON.stringify(deliveryAddress));
      localStorage.setItem(
        'deliveryAddiotionalInfo',
        JSON.stringify(deliveryAdditionalAddressInfo),
      );
      localStorage.setItem('deliveryDetails', JSON.stringify(deliveryDetails));
    } else {
      setIsPickUp(true);
      localStorage.setItem('isPickUp', JSON.stringify(true));
    }

    setModal(false);
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
      />

      <div className={classes.orderNavbarModalContent}>
        {error && <div className={classes.orderNavbarModalError}>{error}</div>}

        {type === 'delivery' && (
          <OrderNavBarModalDelivery
            setIsAddressValid={setIsAddressValid}
            isAddressValid={isAddressValid}
          />
        )}

        <Dropdown
          id="DateDropdown"
          options={days}
          label="Date"
          onChange={(e) => setOrderDateState(e as OrderTime)}
          defaultValue={days[0]}
          value={orderDateState}
        />

        <Dropdown
          id="TimeDropdown"
          options={formattedIntervals}
          label="Time"
          onChange={(e) => setOrderTimeState(e as OrderTime)}
          defaultValue={formattedIntervals[0]}
          value={orderTimeState?.value === null ? null : orderTimeState}
        />

        <Button
          disabled={
            (!isAddressValid && type === 'delivery') ||
            (!orderDetails.isOpenNow && orderTimeState?.label === 'ASAP')
          }
          type="submit"
          styleClass={classes.orderNavbarModalButton}
        >
          {loading ? (
            <Loader width="50px" height="50px" scale={0.5} />
          ) : (
            'Add Details'
          )}
        </Button>
      </div>
    </form>
  );
};

export default OrderNavBarModal;
