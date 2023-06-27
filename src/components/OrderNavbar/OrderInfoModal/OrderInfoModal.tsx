import { useState } from 'react';

import { motion } from 'framer-motion';

import Divider from '../../Divider/Divider';
import ModalHeader from '../../ModalHeader/ModalHeader';

import useStyles from './css';
import { IOrderInfoModal } from './types';

const pickUpHours = [
  { day: 'Monday', hours: '11:00 AM - 10:30 PM' },
  { day: 'Tuesday', hours: '11:00 AM - 10:30 PM' },
  { day: 'Wednesday', hours: '11:00 AM - 10:30 PM' },
  { day: 'Thursday', hours: '11:00 AM - 10:30 PM' },
  { day: 'Friday', hours: '11:00 AM - 10:30 PM' },
  { day: 'Saturday', hours: '11:00 AM - 10:30 PM' },
  { day: 'Sunday', hours: '11:00 AM - 10:30 PM' },
];

const deliveryHours = [
  { day: 'Monday', hours: '11:00 AM - 11:30 PM' },
  { day: 'Tuesday', hours: '11:00 AM - 11:30 PM' },
  { day: 'Wednesday', hours: '11:00 AM - 12:30 PM' },
  { day: 'Thursday', hours: '11:00 AM - 11:30 PM' },
  { day: 'Friday', hours: '11:00 AM - 11:30 PM' },
  { day: 'Saturday', hours: '11:00 AM - 11:30 PM' },
  { day: 'Sunday', hours: '11:00 AM - 11:30 PM' },
];

const OrderInfoModal = ({ setModal }: IOrderInfoModal) => {
  const [isPickUp, setIsPickUp] = useState(true);
  const classes = useStyles();

  return (
    <div className={classes.orderInfoModal}>
      <ModalHeader text={'Store Info'} onClick={() => setModal(false)} />
      <div className={classes.orderInfoModalContent}>
        <div className={classes.orderInfoModalContentName}>
          Igli&apos;s Restaurant
        </div>
        <div className={classes.orderInfoModalContentPhone}>
          <a>(518) 888-0022</a>
        </div>
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
              {(isPickUp ? pickUpHours : deliveryHours).map((item, i) => (
                <div key={i} className={classes.orderInfoHoursTabContentItem}>
                  <div>{item.day}</div>
                  <div>{item.hours}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfoModal;
