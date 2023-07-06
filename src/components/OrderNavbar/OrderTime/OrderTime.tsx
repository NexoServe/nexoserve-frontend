import { useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { useRecoilValue } from 'recoil';

import { OrderDateAtom, OrderTimeAtom } from '../../../state/OrderNavbar';
import { ModalPopUp } from '../../Modal/Modal';
import RoundBorder from '../../RoundBorder/RoundBorder';
import SvgIcons from '../../SvgIcons';
import OrderNavBarModal from '../OrderNavBarModal/OrderNavBarModal';

import useStyles from './css';

const OrderTime = () => {
  const [showTimeModal, setShowTimeModal] = useState(false);

  const orderTime = useRecoilValue(OrderTimeAtom);
  const orderDate = useRecoilValue(OrderDateAtom);
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
            <span className={classes.orderTimeLabel}>{orderDate?.label}:</span>
            <span>{orderTime?.label}</span>
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
            <OrderNavBarModal
              setModal={setShowTimeModal}
              headerText="Date and Time"
            />
          </ModalPopUp>
        )}
      </AnimatePresence>
    </>
  );
};

export default OrderTime;
