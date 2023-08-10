import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { useRecoilState } from 'recoil';

import { base } from '../../../../css/base';
import { OrderIsPickUpAtom } from '../../../state/OrderNavbar';
import { ModalPopUp } from '../../Modal/Modal';
import RoundBorder from '../../RoundBorder/RoundBorder';
import SvgIcons from '../../SvgIcons';
import OrderNavBarModal from '../OrderNavBarModal/OrderNavBarModal';

import useStyles from './css';

const variants = {
  pickUp: { x: 0 },
  delivery: { x: '100%' },
};

const OrderType = () => {
  const [showDeliveryModal, setShowDeliveryModal] = useState(false);
  const classes = useStyles();

  const [isPickUp, setIsPickUp] = useRecoilState(OrderIsPickUpAtom);

  const onClose = () => {
    setShowDeliveryModal(false);
  };

  const handlePickUpClick = () => {
    setIsPickUp(true);
    localStorage.setItem('isPickUp', 'true');
  };

  return (
    <>
      <RoundBorder styleClass={classes.orderType}>
        <div className={classes.orderTypeToggle}>
          <motion.div
            className={classes.orderTypeSlider}
            animate={isPickUp ? 'pickUp' : 'delivery'}
            transition={{ duration: 0.025, ease: 'easeInOut' }}
            variants={variants}
          />
          <button
            onClick={handlePickUpClick}
            className={classes.orderTypeToggleButton}
          >
            <SvgIcons
              styleClass={`${classes.orderTypeIcon} ${classes.orderTypeIconPickUp}`}
              name="pickUp"
              width={base(2.5)}
            />
            Pick Up
          </button>
          <button
            onClick={() => {
              setShowDeliveryModal(true);
            }}
            className={classes.orderTypeToggleButton}
          >
            Delivery
            <SvgIcons
              styleClass={`${classes.orderTypeIcon} ${classes.orderTypeIconDelivery}`}
              name="delivery"
            />
          </button>
        </div>
      </RoundBorder>

      <AnimatePresence>
        {showDeliveryModal && (
          <ModalPopUp showModal={showDeliveryModal} onClose={onClose}>
            <OrderNavBarModal
              setModal={setShowDeliveryModal}
              headerText="Delivery Details"
              type="delivery"
            />
          </ModalPopUp>
        )}
      </AnimatePresence>
    </>
  );
};

export default OrderType;
