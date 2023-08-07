import { useState } from 'react';

import classNames from 'classnames';
import { motion } from 'framer-motion';
import { DateTime } from 'luxon';
import { useRecoilValue } from 'recoil';

import { OrderOpeningHoursAtom } from '../../../state/OrderNavbar';
import Divider from '../../Divider/Divider';
import ModalHeader from '../../ModalHeader/ModalHeader';

import useStyles from './css';
import { IOrderInfoModal } from './types';

const OrderInfoModal = ({ setModal }: IOrderInfoModal) => {
  const openingHours = useRecoilValue(OrderOpeningHoursAtom);

  const [isPickUp, setIsPickUp] = useState(true);
  const classes = useStyles();

  const times = openingHours?.openingHours.map((item, index, arr) => {
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

  console.log('times', times);

  return (
    <div className={classes.orderInfoModal}>
      <ModalHeader text={'Store Info'} onClick={() => setModal(false)} />
      <div className={classes.orderInfoModalContent}>
        <div className={classes.orderInfoModalContentInner}>
          <div>
            <div className={classes.orderInfoModalContentName}>
              Igli&apos;s Restaurant
            </div>
            <div className={classes.orderInfoModalContentPhone}>
              <a>(518) 888-0022</a>
            </div>
          </div>
          <div>
            <div className={classes.orderInfoModalContentAddress}>
              349 Whitehall road
            </div>
            <div className={classes.orderInfoModalContentAddress}>
              Albany Ny 12208
            </div>
            <div>
              <a className={classes.orderInfoModalContentDirections}>
                Get directions
              </a>
            </div>
          </div>
        </div>
        <Divider />
        <div>
          <h3 className={classes.orderInfoModalHoursTitle}>Hours:</h3>

          <div>
            <div className={classes.orderInfoHoursTabs}>
              <button
                className={classes.orderInfoHoursTabButton}
                onClick={() => setIsPickUp(true)}
              >
                Pick up
              </button>
              <button
                onClick={() => setIsPickUp(false)}
                className={classes.orderInfoHoursTabButton}
              >
                Delivery
              </button>
              <motion.div
                className={classes.orderInfoHoursTabUnderline}
                animate={{
                  x: isPickUp ? 0 : 80,
                }}
              ></motion.div>
            </div>

            <div className={classes.orderInfoHoursTabContent}>
              {times?.map((item, i) => {
                const isSameDay =
                  DateTime.fromISO(
                    openingHours?.currentDateTime as string,
                  ).weekdayLong?.toLowerCase() === item.dayOfWeek;
                console.log('isSameDay', isSameDay);
                return (
                  <div
                    key={i}
                    className={classNames(
                      classes.orderInfoHoursTabContentItem,
                      {
                        [classes.orderInfoHoursTabContentItemActive]: isSameDay,
                      },
                    )}
                  >
                    <div>{item.dayOfWeek}</div>
                    <div>
                      {DateTime.fromISO(item.opens_at as string).toFormat(
                        'hh:mm a',
                      )}{' '}
                      -{' '}
                      {DateTime.fromISO(item.closes_at as string).toFormat(
                        'hh:mm a',
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfoModal;
