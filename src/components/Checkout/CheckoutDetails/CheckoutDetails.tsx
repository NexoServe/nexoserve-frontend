import { useState } from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';

import { base } from '../../../../css/base';
import {
  OrderDateAtom,
  OrderDeliveryAdditionalAddressInfoAtom,
  OrderDeliveryAddressAtom,
  OrderDeliveryDetailsAtom,
  OrderIsPickUpAtom,
  OrderIsPickUpStateAtom,
  OrderTimeAtom,
} from '../../../state/OrderNavbar';
import { RestaurantDetailsAtom } from '../../../state/RestaurantState';
import { ModalPopUp } from '../../Modal/Modal';
import OrderNavBarModal from '../../OrderNavbar/OrderNavBarModal/OrderNavBarModal';
import OrderType from '../../OrderNavbar/OrderType/OrderType';
import RoundBorder from '../../RoundBorder/RoundBorder';
import SvgIcons from '../../SvgIcons';
import CheckoutHeader from '../CheckoutHeader/CheckoutHeader';

import useStyles from './css';

const CheckoutDetails = () => {
  const classes = useStyles();
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);

  const [, setIsPickUp] = useRecoilState(OrderIsPickUpAtom);
  const isPickUpState = useRecoilValue(OrderIsPickUpStateAtom);
  const orderTime = useRecoilValue(OrderTimeAtom);
  const orderDate = useRecoilValue(OrderDateAtom);
  const deliveryAddress = useRecoilValue(OrderDeliveryAddressAtom);
  const deliveryAdditionalAddressInfo = useRecoilValue(
    OrderDeliveryAdditionalAddressInfoAtom,
  );
  const deliveryDetails = useRecoilValue(OrderDeliveryDetailsAtom);

  const restaurantDetails = useRecoilValue(RestaurantDetailsAtom);

  return (
    <>
      <RoundBorder styleClass={classes.checkoutDetails}>
        <CheckoutHeader title={'Order Details'} />
        <div>
          <div className={classes.checkoutDetailsOrderType}>
            <OrderType isCheckout={true} />
          </div>
          <button
            onClick={() => {
              if (!isPickUpState) {
                setShowAddressModal(true);
                setIsPickUp(false);
              }
            }}
            className={classes.checkoutDetailsContentItem}
            style={{
              cursor: isPickUpState ? 'default' : 'pointer',
            }}
          >
            <div className={classes.checkoutDetailsHeader}>
              <SvgIcons
                name={isPickUpState ? 'pickUp' : 'car'}
                width="40"
                height="20"
              />
              <h3 className={classes.checkoutDetailsContentItemTitle}>
                {isPickUpState ? 'Pick Up' : 'Delivery'} Address:
              </h3>
            </div>

            <div className={classes.checkoutDetailsBody}>
              <div>
                {isPickUpState
                  ? '349 Whitehall road, Albany, NY, USA, 12208'
                  : deliveryAddress}
              </div>
              {!isPickUpState && (
                <>
                  <div>{deliveryAdditionalAddressInfo}</div>
                  <div>{deliveryDetails}</div>
                </>
              )}
            </div>
            {!isPickUpState && (
              <div className={classes.checkoutDetailsButton}>
                <div>Edit</div>
              </div>
            )}
          </button>
          {isPickUpState && (
            <div className={classes.checkoutDetailsLink}>
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
          )}

          <button
            onClick={() => setShowTimeModal(true)}
            className={classes.checkoutDetailsContentItem}
            style={{
              marginTop: base(3),
              marginBottom: base(2),
            }}
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

      <ModalPopUp
        showModal={showTimeModal}
        onClose={() => setShowTimeModal(false)}
      >
        <OrderNavBarModal
          setModal={setShowTimeModal}
          headerText="Delivery Details"
        />
      </ModalPopUp>

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
    </>
  );
};

export default CheckoutDetails;
