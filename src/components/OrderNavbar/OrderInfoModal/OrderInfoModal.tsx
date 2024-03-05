import { useEffect } from 'react';

import classNames from 'classnames';
import { motion } from 'framer-motion';
import { DateTime } from 'luxon';
import { useRecoilState, useRecoilValue } from 'recoil';

import { base } from '../../../../css/base';
import { OrderTypeEnum } from '../../../../generated/graphql';
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

const OrderInfoModal = ({ setModal, theme }: IOrderInfoModal) => {
  const restaurantDetails = useRecoilValue(RestaurantDetailsAtom);
  const orderDetails = useRecoilValue(OrderDetailsAtom);

  const [isPickUp, setIsPickUp] = useRecoilState(InfoModalIsPickUpAtom);
  const classes = useStyles({
    theme,
  });

  const pickUpOpeningHours = getRestaurantOpeningHours(
    restaurantDetails?.pickUpOpeningHours,
  );

  const deliveryOpeningHours = getRestaurantOpeningHours(
    restaurantDetails?.deliveryOpeningHours,
  );

  useEffect(() => {
    if (
      restaurantDetails.services?.length === 1 &&
      restaurantDetails.services[0] === OrderTypeEnum.Delivery
    ) {
      setIsPickUp(false);
    }
  }, [restaurantDetails]);

  return (
    <div className={classes.orderInfoModal}>
      <ModalHeader
        text={'Store Info'}
        onClick={() => {
          setModal(false);
          setIsPickUp(true);
        }}
        theme={theme}
      />
      <div className={classes.orderInfoModalContent}>
        <div className={classes.orderInfoModalContentInner}>
          <div>
            <div className={classes.orderInfoModalContentName}>
              {restaurantDetails?.name}
            </div>
            <div className={classes.orderInfoModalContentPhone}>
              {restaurantDetails?.phoneNumbers?.map((phone, i) => (
                <a
                  style={{
                    paddingTop: base(0.5),
                    paddingBottom: base(0.5),
                    color: theme.primary,
                  }}
                  key={phone.id}
                  href={`tel:${phone.number}`}
                >
                  {phone.number}
                </a>
              ))}
            </div>
          </div>
          {restaurantDetails?.services.includes(OrderTypeEnum.PickUp) && (
            <div>
              <div className={classes.orderInfoModalContentAddress}>
                {restaurantDetails?.address}
              </div>
              <div className={classes.orderInfoModalContentDirections}>
                <a
                  style={{
                    color: theme.primary,
                  }}
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
          )}
        </div>
        <Divider theme={theme} />
        <div>
          <h3 className={classes.orderInfoModalHoursTitle}>Hours:</h3>

          <div>
            <div className={classes.orderInfoHoursTabs}>
              {restaurantDetails.services.includes(OrderTypeEnum.PickUp) && (
                <button
                  className={classes.orderInfoHoursTabButton}
                  onClick={() => setIsPickUp(true)}
                >
                  Pick up
                </button>
              )}

              {restaurantDetails.services.includes(OrderTypeEnum.Delivery) && (
                <button
                  onClick={() => setIsPickUp(false)}
                  className={classes.orderInfoHoursTabButton}
                >
                  Delivery
                </button>
              )}

              <motion.div
                className={classes.orderInfoHoursTabUnderline}
                animate={{
                  x:
                    restaurantDetails.services?.length === 1
                      ? 0
                      : isPickUp
                      ? 0
                      : 80,
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
