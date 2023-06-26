import { useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import { ModalPopUp } from '../../Modal/Modal';
import RoundBorder from '../../RoundBorder/RoundBorder';
import SvgIcons from '../../SvgIcons';
import OrderNavBarModal from '../OrderNavBarModal/OrderNavBarModal';

import useStyles from './css';

const OrderTime = () => {
  const [showTimeModal, setShowTimeModal] = useState(false);
  const classes = useStyles();

  return (
    <>
      <button
        onClick={() => setShowTimeModal(true)}
        className={classes.orderTime}
      >
        <RoundBorder styleClass={classes.orderTimeContainer}>
          <SvgIcons styleClass={classes.orderTimeIcon} name="clock" />
          <div className={classes.orderTimeInner}>
            <span className={classes.orderTimeLabel}>Sat. Jun 12:</span>
            <span>10:40 PM</span>
          </div>
          <SvgIcons styleClass={classes.orderTimeIconArrow} name="arrow" />
        </RoundBorder>
      </button>

      <AnimatePresence>
        {showTimeModal && (
          <ModalPopUp
            showModal={showTimeModal}
            onClose={() => setShowTimeModal(false)}
          >
            <OrderNavBarModal headerText="Time Details" type="time" />
          </ModalPopUp>
        )}
      </AnimatePresence>
    </>
  );
};

export default OrderTime;
