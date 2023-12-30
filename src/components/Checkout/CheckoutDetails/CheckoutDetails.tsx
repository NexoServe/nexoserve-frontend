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
import { ICheckoutDetails } from './types';

const CheckoutDetails = ({ theme }: ICheckoutDetails) => {
  const classes = useStyles({
    theme,
  });
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
      <RoundBorder styleClass={classes.checkoutDetails} theme={theme}>
        <CheckoutHeader title={'Order Details'} theme={theme} />
        <div>
          <div className={classes.checkoutDetailsOrderType}>
            <OrderType theme={theme} isCheckout={true} />
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
                fill={theme.primary}
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
                <SvgIcons
                  name="clock"
                  width="30px"
                  height="30px"
                  fill={theme.primary}
                />
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
        theme={theme}
      >
        <OrderNavBarModal
          setModal={setShowTimeModal}
          headerText="Delivery Details"
          theme={theme}
        />
      </ModalPopUp>

      <ModalPopUp
        showModal={showAddressModal}
        onClose={() => setShowAddressModal(false)}
        theme={theme}
      >
        <OrderNavBarModal
          setModal={setShowAddressModal}
          headerText="Delivery Details"
          type="delivery"
          theme={theme}
        />
      </ModalPopUp>
    </>
  );
};

export default CheckoutDetails;
