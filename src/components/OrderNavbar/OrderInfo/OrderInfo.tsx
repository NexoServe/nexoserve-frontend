import { useState } from 'react';

import classNames from 'classnames';
import { AnimatePresence } from 'framer-motion';
import { DateTime } from 'luxon';
import { useRecoilValue } from 'recoil';

import { OrderDetailsAtom } from '../../../state/OrderNavbar';
import { RestaurantDetailsAtom } from '../../../state/RestaurantState';
import { ModalPopUp } from '../../Modal/Modal';
import SvgIcons from '../../SvgIcons';
import OrderInfoModal from '../OrderInfoModal/OrderInfoModal';

import useStyles from './css';

const OrderInfo = () => {
  const classes = useStyles();

  const restaurantDetails = useRecoilValue(RestaurantDetailsAtom);
  const orderDetails = useRecoilValue(OrderDetailsAtom);

  const [showInfoModal, setShowInfoModal] = useState(false);

  const times = restaurantDetails?.openingHours.map((item, index, arr) => {
    let closingTime;

    // If 'closes_at' is '23:59', use the 'closes_at' of the next day's first time slot
    if (item.time[item.time.length - 1].closes_at === '23:59') {
      const nextDayIndex = (index + 1) % arr.length;
      closingTime = arr[nextDayIndex].time[0].closes_at;
    } else {
      // If 'closes_at' is not '23:59', use the 'closes_at' of the current day's last time slot
      closingTime = item.time[item.time.length - 1].closes_at;
    }

    // Check if there's a second 'opens_at', otherwise use the first
    const openingTime = item.time[1]?.opens_at ?? item.time[0].opens_at;

    return {
      dayOfWeek: item.dayOfWeek,
      opens_at: openingTime,
      closes_at: closingTime,
    };
  });

  let displayMessage = '';

  if (orderDetails) {
    const currentDateTime = DateTime.fromISO(orderDetails.currentDateTime);
    const currentDayOfWeek = currentDateTime.toFormat('cccc').toLowerCase();

    // Find today's hours
    const todayHours = times?.find(
      (item) => item.dayOfWeek === currentDayOfWeek,
    );

    if (orderDetails.isOpenNow) {
      // If the store is open, display "Open until ___"
      displayMessage = `Open until ${DateTime.fromISO(
        todayHours?.closes_at as string,
      ).toFormat('hh:mm a')}`;
    } else {
      // If the store is closed...

      // Find tomorrow's day of week and hours
      const tomorrowDateTime = currentDateTime.plus({ days: 1 });
      const tomorrowDayOfWeek = tomorrowDateTime.toFormat('cccc').toLowerCase();
      const tomorrowHours = times?.find(
        (item) => item.dayOfWeek === tomorrowDayOfWeek,
      );

      // Check if tomorrow is still the same day (e.g., before midnight)
      if (currentDayOfWeek === tomorrowDayOfWeek) {
        displayMessage = `Opens today at ${DateTime.fromISO(
          tomorrowHours?.opens_at as string,
        ).toFormat('hh:mm a')}`;
      } else {
        displayMessage = `Opens tomorrow at ${DateTime.fromISO(
          tomorrowHours?.opens_at as string,
        ).toFormat('hh:mm a')}`;
      }
    }
  }

  return (
    <>
      <button
        className={classes.orderInfo}
        onClick={() => setShowInfoModal(true)}
      >
        <SvgIcons styleClass={classes.orderInfoIcon} name="info" />
        <div className={classes.orderInfoStatus}>
          <div className={classes.orderInfoStatusText}>{displayMessage}</div>
          <div
            className={classNames(classes.orderInfoStatusIcon, {
              [classes.orderInfoStatusIconClosed]: !orderDetails?.isOpenNow,
            })}
          ></div>
        </div>
      </button>

      <AnimatePresence>
        {showInfoModal && (
          <ModalPopUp
            showModal={showInfoModal}
            onClose={() => setShowInfoModal(false)}
          >
            <OrderInfoModal setModal={setShowInfoModal} />
          </ModalPopUp>
        )}
      </AnimatePresence>
    </>
  );
};

export default OrderInfo;
