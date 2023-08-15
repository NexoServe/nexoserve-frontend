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
import {
  getNextDateFromDayOfWeek,
  getNextOpeningDay,
  getRestaurantOpeningHours,
} from './helpers';

const OrderInfo = () => {
  const classes = useStyles();

  const restaurantDetails = useRecoilValue(RestaurantDetailsAtom);
  const orderDetails = useRecoilValue(OrderDetailsAtom);

  const [showInfoModal, setShowInfoModal] = useState(false);

  const now = DateTime.fromISO(orderDetails?.currentDateTime);
  const currentDay = now.toFormat('EEEE').toLowerCase();

  const restaurantOpeningHours = getRestaurantOpeningHours(
    restaurantDetails?.openingHours,
  );

  let displayMessage = '';

  if (orderDetails) {
    const currentDateTime = DateTime.fromISO(orderDetails.currentDateTime);
    const currentDayOfWeek = currentDateTime.toFormat('cccc').toLowerCase();

    // Find today's hours
    const todayHours = restaurantOpeningHours?.find(
      (item) => item.dayOfWeek === currentDayOfWeek,
    );

    if (orderDetails.isOpenNow) {
      // If the store is open, display "Open until ___"
      displayMessage = `Open until ${DateTime.fromISO(
        todayHours?.closes_at as string,
      ).toFormat('hh:mm a')}`;
    } else {
      const nextOpeningDay = getNextOpeningDay(
        currentDay,
        restaurantDetails?.openingHours,
      );

      const tomorrowDayOfWeek = DateTime.fromISO(orderDetails.currentDateTime)
        .plus({ days: 1 })
        .toFormat('cccc')
        .toLowerCase();

      if (
        nextOpeningDay?.dayOfWeek.toLowerCase() ===
        tomorrowDayOfWeek.toLowerCase()
      ) {
        displayMessage = `Opens tomorrow at ${DateTime.fromISO(
          nextOpeningDay?.time?.[0]?.opens_at as string,
        ).toFormat('hh:mm a')}`;
      } else {
        const nextOpeningDate = getNextDateFromDayOfWeek(
          now,
          nextOpeningDay?.dayOfWeek as string,
        );

        displayMessage = `Opens ${nextOpeningDate.toFormat(
          'MMMM dd yyyy',
        )} at ${DateTime.fromISO(
          nextOpeningDay?.time[0].opens_at as string,
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
