import { useEffect, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { useRecoilValue } from 'recoil';

import { OrderOpeningHoursAtom } from '../../../state/OrderNavbar';
import { ModalPopUp } from '../../Modal/Modal';
import SvgIcons from '../../SvgIcons';
import OrderInfoModal from '../OrderInfoModal/OrderInfoModal';
import OrderNavBarModal from '../OrderNavBarModal/OrderNavBarModal';

import useStyles from './css';

const OrderInfo = () => {
  const openingHours = useRecoilValue(OrderOpeningHoursAtom);
  const classes = useStyles();
  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showTimeModal, setShowTimeModal] = useState(false);

  useEffect(() => {
    if (!openingHours?.isOrderTimeValid) {
      setShowTimeModal(true);
    } else {
      setShowTimeModal(false);
    }
  }, [openingHours]);

  return (
    <>
      <button
        className={classes.orderInfo}
        onClick={() => setShowInfoModal(true)}
      >
        <SvgIcons styleClass={classes.orderInfoIcon} name="info" />
        <div className={classes.orderInfoStatus}>
          <div className={classes.orderInfoStatusText}>Open until 10:30 PM</div>
          <div className={classes.orderInfoStatusIcon}></div>
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

      <AnimatePresence>
        {showTimeModal && (
          <ModalPopUp
            showModal={showTimeModal}
            onClose={() => {
              console.log();
            }}
          >
            <OrderNavBarModal
              headerText="Date and Time"
              setModal={setShowInfoModal}
              error={
                !openingHours?.isOpenNow
                  ? "Sorry, we're currently closed. You can still place an order in advanced"
                  : 'Sorry, the previous selected order time is not valid anymore. Please select a new one.'
              }
            />
          </ModalPopUp>
        )}
      </AnimatePresence>
    </>
  );
};

export default OrderInfo;
