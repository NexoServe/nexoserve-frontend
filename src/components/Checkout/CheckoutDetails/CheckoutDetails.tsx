import { useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { useRecoilValue } from 'recoil';

import {
  OrderDateAtom,
  OrderDeliveryAdditionalAddressInfoAtom,
  OrderDeliveryAddressAtom,
  OrderDeliveryDetailsAtom,
  OrderIsPickUpAtom,
  OrderTimeAtom,
} from '../../../state/OrderNavbar';
import { ModalPopUp } from '../../Modal/Modal';
import OrderNavBarModal from '../../OrderNavbar/OrderNavBarModal/OrderNavBarModal';
import RoundBorder from '../../RoundBorder/RoundBorder';
import SvgIcons from '../../SvgIcons';
import CheckoutHeader from '../CheckoutHeader/CheckoutHeader';

import useStyles from './css';

const CheckoutDetails = () => {
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const classes = useStyles();

  const isPickUp = useRecoilValue(OrderIsPickUpAtom);
  const orderTime = useRecoilValue(OrderTimeAtom);
  const orderDate = useRecoilValue(OrderDateAtom);
  const deliveryAddress = useRecoilValue(OrderDeliveryAddressAtom);
  const deliveryAdditionalAddressInfo = useRecoilValue(
    OrderDeliveryAdditionalAddressInfoAtom,
  );
  const deliveryDetails = useRecoilValue(OrderDeliveryDetailsAtom);

  return (
    <>
      <RoundBorder styleClass={classes.checkoutDetails}>
        <CheckoutHeader
          title={isPickUp ? 'Pickup Details' : 'Delivery Details'}
        />
        <div>
          <button
            onClick={() => setShowAddressModal(true)}
            className={classes.checkoutDetailsContentItem}
          >
            <div className={classes.checkoutDetailsHeader}>
              <SvgIcons
                name={isPickUp ? 'pickUp' : 'car'}
                width="40"
                height="20"
              />
              <h3 className={classes.checkoutDetailsContentItemTitle}>
                {isPickUp ? 'Pick Up' : 'Delivery'} Address:
              </h3>
            </div>
            <div className={classes.checkoutDetailsBody}>
              <div>
                {isPickUp
                  ? '349 Whitehall road, Albany, NY, USA, 12208'
                  : deliveryAddress}
              </div>
              {!isPickUp && (
                <>
                  <div>{deliveryAdditionalAddressInfo}</div>
                  <div>{deliveryDetails}</div>
                </>
              )}
            </div>
            {isPickUp && (
              <div className={classes.checkoutDetailsLink}>
                <a>Get Direction</a>
              </div>
            )}

            <div className={classes.checkoutDetailsButton}>
              <div>Edit</div>
            </div>
          </button>
          <button
            onClick={() => setShowTimeModal(true)}
            className={classes.checkoutDetailsContentItem}
          >
            <div className={classes.checkoutDetailsHeader}>
              <div className={classes.checkoutDetailsIcon}>
                <SvgIcons name="clock" width="30px" height="30px" />
              </div>
              <h3 className={classes.checkoutDetailsContentItemTitle}>
                Day and Time:
              </h3>
            </div>
            <div className={classes.checkoutDetailsBody}>
              <div>{orderDate?.label}</div>
              <div>
                {orderTime?.label === 'ASAP'
                  ? 'ASAP (Approx. 10-30min)'
                  : orderTime?.label}
              </div>
            </div>
            <div className={classes.checkoutDetailsButton}>
              <div>Edit</div>
            </div>
          </button>
        </div>
      </RoundBorder>

      <AnimatePresence>
        {showTimeModal && (
          <ModalPopUp
            showModal={showTimeModal}
            onClose={() => setShowTimeModal(false)}
          >
            <OrderNavBarModal
              setModal={setShowTimeModal}
              headerText="Delivery Details"
            />
          </ModalPopUp>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showAddressModal && (
          <ModalPopUp
            showModal={showAddressModal}
            onClose={() => setShowAddressModal(false)}
          >
            <OrderNavBarModal
              setModal={setShowAddressModal}
              headerText="Delivery Details"
              type="delivery"
            />
          </ModalPopUp>
        )}
      </AnimatePresence>
    </>
  );
};

export default CheckoutDetails;
