import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { useRecoilState, useRecoilValue } from 'recoil';

import { base } from '../../../../css/base';
import { OrderTypeEnum } from '../../../../generated/graphql';
import {
  OrderIsPickUpAtom,
  OrderIsPickUpStateAtom,
} from '../../../state/OrderNavbar';
import { RestaurantDetailsAtom } from '../../../state/RestaurantState';
import { ModalPopUp } from '../../Modal/Modal';
import RoundBorder from '../../RoundBorder/RoundBorder';
import SvgIcons from '../../SvgIcons';
import OrderNavBarModal from '../OrderNavBarModal/OrderNavBarModal';

import useStyles from './css';
import { IOrderType } from './types';

const variants = {
  pickUp: { x: 0 },
  delivery: { x: '100%' },
};

const OrderType = ({ isCheckout = false, theme }: IOrderType) => {
  const classes = useStyles({
    theme,
  });

  const restaurantDetails = useRecoilValue(RestaurantDetailsAtom);
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);
  const [showPickUpModal, setShowPickUpModal] = useState(false);

  const [, setIsPickUp] = useRecoilState(OrderIsPickUpAtom);
  const [isPickUpState, setIsPickUpState] = useRecoilState(
    OrderIsPickUpStateAtom,
  );

  const isPickUpStorage = localStorage.getItem('isPickUp');

  useEffect(() => {
    setIsPickUpState(isPickUpStorage === 'true');
  }, [isPickUpStorage]);

  const onClose = () => {
    setShowDeliveryModal(false);
    setShowPickUpModal(false);
  };

  const handlePickUpClick = () => {
    setIsPickUp(true);
    setShowPickUpModal(true);
  };

  return (
    <>
      <RoundBorder
        style={
          isCheckout
            ? {
                width: '100%',
              }
            : undefined
        }
        styleClass={classes.orderType}
        theme={theme}
      >
        <div className={classes.orderTypeToggle}>
          <motion.div
            className={classes.orderTypeSlider}
            animate={isPickUpState ? 'pickUp' : 'delivery'}
            transition={{ duration: 0.025, ease: 'easeInOut' }}
            variants={variants}
          />
          <button
            onClick={handlePickUpClick}
            className={classes.orderTypeToggleButton}
            disabled={
              !restaurantDetails.services?.includes(OrderTypeEnum.PickUp)
            }
          >
            {!restaurantDetails.services?.includes(OrderTypeEnum.PickUp) ? (
              <div className={classes.orderTypeToggleButtonUnavailable}>
                Pick Up not available
              </div>
            ) : (
              <>
                {!isCheckout && (
                  <SvgIcons
                    styleClass={`${classes.orderTypeIcon} ${classes.orderTypeIconPickUp}`}
                    name="pickUp"
                    width={base(2.5)}
                    fill={theme.primary}
                  />
                )}
                Pick Up
              </>
            )}
          </button>
          <button
            onClick={() => {
              setShowDeliveryModal(true);
              setShowDeliveryModal(true);
              setIsPickUp(false);
            }}
            className={classes.orderTypeToggleButton}
            disabled={
              !restaurantDetails.services?.includes(OrderTypeEnum.Delivery)
            }
          >
            {!restaurantDetails.services?.includes(OrderTypeEnum.Delivery) ? (
              <div className={classes.orderTypeToggleButtonUnavailable}>
                Delivery not available
              </div>
            ) : (
              <>
                Delivery
                {!isCheckout && (
                  <SvgIcons
                    styleClass={`${classes.orderTypeIcon} ${classes.orderTypeIconDelivery}`}
                    name="delivery"
                    fill={theme.primary}
                  />
                )}
              </>
            )}
          </button>
        </div>
      </RoundBorder>

      <ModalPopUp theme={theme} showModal={showDeliveryModal} onClose={onClose}>
        <OrderNavBarModal
          setModal={setShowDeliveryModal}
          headerText="Delivery Details"
          type="delivery"
          theme={theme}
        />
      </ModalPopUp>

      <ModalPopUp theme={theme} showModal={showPickUpModal} onClose={onClose}>
        <OrderNavBarModal
          setModal={setShowPickUpModal}
          headerText="Pick Up Details"
          type="pickup"
          theme={theme}
        />
      </ModalPopUp>
    </>
  );
};

export default OrderType;
