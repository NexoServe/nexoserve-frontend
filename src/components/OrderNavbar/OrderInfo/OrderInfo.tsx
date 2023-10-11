import { useState } from 'react';

import classNames from 'classnames';
import { AnimatePresence } from 'framer-motion';
import { useRecoilValue } from 'recoil';

import { OrderDetailsAtom } from '../../../state/OrderNavbar';
import { RestaurantDetailsAtom } from '../../../state/RestaurantState';
import { ModalPopUp } from '../../Modal/Modal';
import SvgIcons from '../../SvgIcons';
import OrderInfoModal from '../OrderInfoModal/OrderInfoModal';

import useStyles from './css';

const OrderInfo = () => {
  const classes = useStyles();

  const restaurantDetails = useRecoilValue(RestaurantDetailsAtom);
  const orderDetails = useRecoilValue(OrderDetailsAtom);

  const [showInfoModal, setShowInfoModal] = useState(false);

  return (
    <>
      <button
        className={classes.orderInfo}
        onClick={() => setShowInfoModal(true)}
      >
        <SvgIcons styleClass={classes.orderInfoIcon} name="info" />
        <div className={classes.orderInfoStatus}>
          <div className={classes.orderInfoStatusText}>
            {restaurantDetails?.openStatusMessage}
          </div>
          <div
            className={classNames(classes.orderInfoStatusIcon, {
              [classes.orderInfoStatusIconClosed]: !orderDetails?.isOpenNow,
            })}
          ></div>
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
