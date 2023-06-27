import { useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import { ModalPopUp } from '../../Modal/Modal';
import SvgIcons from '../../SvgIcons';
import OrderInfoModal from '../OrderInfoModal/OrderInfoModal';

import useStyles from './css';

const OrderInfo = () => {
  const classes = useStyles();
  const [showInfoModal, setShowInfoModal] = useState(false);

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
    </>
  );
};

export default OrderInfo;
