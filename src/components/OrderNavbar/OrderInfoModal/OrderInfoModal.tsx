import classNames from 'classnames';
import { motion } from 'framer-motion';
import { DateTime } from 'luxon';
import { useRecoilState, useRecoilValue } from 'recoil';

import {
  InfoModalIsPickUpAtom,
  OrderDetailsAtom,
} from '../../../state/OrderNavbar';
import { RestaurantDetailsAtom } from '../../../state/RestaurantState';
import Divider from '../../Divider/Divider';
import ModalHeader from '../../ModalHeader/ModalHeader';
import { getRestaurantOpeningHours } from '../OrderInfo/helpers';

import useStyles from './css';
import { IOrderInfoModal } from './types';

const OrderInfoModal = ({ setModal }: IOrderInfoModal) => {
  const restaurantDetails = useRecoilValue(RestaurantDetailsAtom);
  const orderDetails = useRecoilValue(OrderDetailsAtom);

  const [isPickUp, setIsPickUp] = useRecoilState(InfoModalIsPickUpAtom);
  const classes = useStyles();

  const pickUpOpeningHours = getRestaurantOpeningHours(
    restaurantDetails?.pickUpOpeningHours,
  );

  const deliveryOpeningHours = getRestaurantOpeningHours(
    restaurantDetails?.deliveryOpeningHours,
  );

  return (
    <div className={classes.orderInfoModal}>
      <ModalHeader
        text={'Store Info'}
        onClick={() => {
          setModal(false);
          setIsPickUp(true);
        }}
      />
      <div className={classes.orderInfoModalContent}>
        <div className={classes.orderInfoModalContentInner}>
          <div>
            <div className={classes.orderInfoModalContentName}>
              {restaurantDetails?.name}
            </div>
            <div className={classes.orderInfoModalContentPhone}>
              <a href={`tel:${restaurantDetails?.phone}`}>
                {restaurantDetails?.phone}
              </a>
            </div>
          </div>
          <div>
            <div className={classes.orderInfoModalContentAddress}>
              {restaurantDetails?.address}
            </div>
            <div className={classes.orderInfoModalContentDirections}>
              <a
                href={`https://www.google.com/maps/place/${restaurantDetails?.address.replace(
                  / /g,
                  '+',
                )}`}
                target="_blank"
                rel="noreferrer"
              >
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
              {(isPickUp ? pickUpOpeningHours : deliveryOpeningHours)?.map(
                (item, i) => {
                  const isSameDay =
                    DateTime.fromISO(orderDetails?.currentDateTime as string)
                      .weekdayLong === item.dayOfWeek;

                  return (
                    <div
                      key={i}
                      className={classNames(
                        classes.orderInfoHoursTabContentItem,
                        {
                          [classes.orderInfoHoursTabContentItemActive]:
                            isSameDay,
                        },
                      )}
                    >
                      <div>{item.dayOfWeek}</div>
                      <div>
                        {!item.opens_at ? (
                          'Closed'
                        ) : (
                          <>
                            {' '}
                            {DateTime.fromISO(item.opens_at as string).toFormat(
                              'hh:mm a',
                            )}{' '}
                            -{' '}
                            {DateTime.fromISO(
                              item.closes_at as string,
                            ).toFormat('hh:mm a')}
                          </>
                        )}
                      </div>
                    </div>
                  );
                },
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInfoModal;
