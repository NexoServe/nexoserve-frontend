import { FormEvent, useEffect, useMemo, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { DateTime, Interval } from 'luxon';
import { useRecoilState, useRecoilValue } from 'recoil';

import { useValidateOrderDetailsLazyQuery } from '../../../../generated/graphql';
import { FoodMenuAtom } from '../../../state/FoodModalState';
import {
  OrderDateAtom,
  OrderDeliveryAdditionalAddressInfoAtom,
  OrderDeliveryAddressAtom,
  OrderDeliveryDetailsAtom,
  OrderIsPickUpAtom,
  OrderOpeningHoursAtom,
  OrderTime,
  OrderTimeAtom,
} from '../../../state/OrderNavbar';
import getHourAndMinute from '../../../utils/getHourAndMintue';
import Button from '../../Button/Button';
import Dropdown from '../../Dropdown/Dropdown';
import Loader from '../../Loader/Loader';
import { ModalPopUp } from '../../Modal/Modal';
import ModalHeader from '../../ModalHeader/ModalHeader';
import OrderNavBarModalDelivery from '../OrderNavBarModalDelivery/OrderNavBarModalDelivery';

import useStyles from './css';
import { IOrderNavBarModal } from './types';

const OrderNavBarModal = ({
  setModal,
  headerText,
  type,
  error,
}: IOrderNavBarModal) => {
  const [validateOrderDetails, { loading, data }] =
    useValidateOrderDetailsLazyQuery({
      fetchPolicy: 'no-cache',
    });

  const [showInvalidTimeModal, setShowInvalidTimeModal] = useState(false);

  const [openingHours, setOpeningHours] = useRecoilState(OrderOpeningHoursAtom);

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

  const now = DateTime.fromISO(openingHours?.currentDateTime as string).setZone(
    openingHours?.timezone,
  );

  const days: OrderTime[] = [];

  for (let i = 0; i < 7; i++) {
    const day = now.plus({ days: i });
    days.push({
      value: day,
      label: day.toFormat('EEE, MMM dd'),
    });
  }

  const openingHoursForDay = openingHours?.openingHours.find(
    (day) => day.dayOfWeek === now.weekdayLong?.toLowerCase(),
  );

  const allHoursAreInThePast = openingHoursForDay?.time.every((interval) => {
    const openingTime = DateTime.fromFormat(
      interval?.opens_at as string,
      'HH:mm',
      {
        zone: openingHours?.timezone,
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
        zone: openingHours?.timezone,
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

  if (allHoursAreInThePast) {
    days.shift();
  } else {
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
                openingHours?.timezone,
              ),
      });
    }
  }, []);

  console.log('orderDateState', orderDateState);

  const dayHours =
    openingHours?.openingHours.find(
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
        zone: openingHours?.timezone,
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
        zone: openingHours?.timezone,
      },
    );

    const timeInterval = Interval.fromDateTimes(
      openingTime.toFormat('hh:mm a') === '12:00 AM'
        ? openingTime
        : openingTime.plus({ minutes: 15 }),
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
    intervals = intervals.filter((interval) => (interval as DateTime) > now);
  }

  // Format the intervals
  const formattedIntervals = intervals.map((interval, i) => ({
    value: interval,
    label: interval?.toFormat('hh:mm a'),
  }));

  if (
    openingHours?.isOpenNow &&
    formattedIntervals &&
    formattedIntervals.length > 0 &&
    !allHoursAreInThePast &&
    orderDateState?.label === 'Today'
  ) {
    formattedIntervals[0].label = 'ASAP';
  }

  if (formattedIntervals.length === 0 && openingHours?.isOpenNow) {
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
      return;
    }

    setMenu(res.data.validateOrderDetails.menu);

    setOpeningHours({
      address: res.data.validateOrderDetails.address,
      location: {
        latitude: res.data.validateOrderDetails.location.latitude,
        longitude: res.data.validateOrderDetails.location.longitude,
      },
      isOrderTimeValid: res.data.validateOrderDetails.isOrderTimeValid,
      isOpenNow: openingHours?.isOpenNow as boolean,
      currentDateTime: res.data.validateOrderDetails.currentDateTime as string,
      openingHours: openingHours?.openingHours ?? [],
      timezone: res.data.validateOrderDetails.timezone as string,
    });

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

    if (
      res.data.validateOrderDetails.isDeliveryAddressValid &&
      type === 'delivery'
    ) {
      setIsPickUp(false);
      localStorage.setItem('isPickUp', JSON.stringify(false));
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
      console.log('here');
      setOrderTimeState({
        label: 'ASAP',
        value: null,
      });
    }
  }, [error]);

  console.log('ORDER TIME', orderTime);

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
          value={
            orderTimeState?.value === null
              ? formattedIntervals[0]
              : orderTimeState
          }
        />

        <Button
          disabled={!isAddressValid && type === 'delivery'}
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
                !data?.validateOrderDetails?.isOpenNow
                  ? "Sorry, we're currently closed. You can still place an order in advanced"
                  : 'Sorry, we need a little extra time. Please select a new time.'
              }
            />
          </ModalPopUp>
        )}
      </AnimatePresence>
    </form>
  );
};

export default OrderNavBarModal;