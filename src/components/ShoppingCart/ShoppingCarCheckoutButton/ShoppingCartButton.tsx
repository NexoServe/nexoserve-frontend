import { useEffect } from 'react';

import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';

import { base } from '../../../../css/base';
import { OptionWithSizeType } from '../../../../generated/graphql';
import { OrderIsPickUpStateAtom } from '../../../state/OrderNavbar';
import { RestaurantDetailsAtom } from '../../../state/RestaurantState';
import {
  ShoppingCartAtom,
  ShoppingCartTotalAtom,
} from '../../../state/ShoppingCartState';
import calculateShoppingCartItemTotal from '../../../utils/calculateShoppingCartItemTotal';
import Button from '../../Button/Button';
import SvgIcons from '../../SvgIcons';

import useStyles from './css';
import { IShoppingCartCheckoutButton } from './types';

const ShoppingCarCheckoutButton = ({ theme }: IShoppingCartCheckoutButton) => {
  const styles = useStyles();
  const router = useRouter();

  const restaurantDetails = useRecoilValue(RestaurantDetailsAtom);
  const isPickUpState = useRecoilValue(OrderIsPickUpStateAtom);
  const [shoppingCartTotal, setShoppingCartTotal] = useRecoilState(
    ShoppingCartTotalAtom,
  );
  const shoppingCart = useRecoilValue(ShoppingCartAtom);

  useEffect(() => {
    if (!shoppingCartTotal.isValidated) {
      let total = 0;

      shoppingCart.forEach((item) => {
        total += calculateShoppingCartItemTotal(
          {
            food: item.food,
            selectedSize: item.selectedSize,
            quantity: item.quantity,
          },
          item?.selectedOptions as OptionWithSizeType[],
        );
      });

      setShoppingCartTotal({
        ...shoppingCartTotal,
        subtotal: parseFloat(total.toFixed(2)),
      });
    }
  }, [shoppingCart]);

  return (
    <>
      {shoppingCart.length > 0 &&
        !isPickUpState &&
        restaurantDetails.deliveryMinimum > shoppingCartTotal.subtotal && (
          <div
            style={{
              paddingLeft: base(1),
              paddingRight: base(1),
              paddingTop: base(1),
              fontSize: '14px',
              display: 'flex',
            }}
          >
            <SvgIcons width="15px" name="info" />
            <div
              style={{
                paddingLeft: base(1),
              }}
            >
              Please add{' '}
              <span
                style={{
                  color: theme.tertiary,
                }}
              >
                $
                {restaurantDetails.deliveryMinimum - shoppingCartTotal.subtotal}
              </span>{' '}
              more to your cart to meet the delivery minimum.
            </div>
          </div>
        )}

      {shoppingCart.length > 0 ? (
        <div className={styles.shoppingCartModalButtonBox}>
          <Button
            onClick={() => router.push('/checkout')}
            disabled={
              !isPickUpState &&
              restaurantDetails.deliveryMinimum > shoppingCartTotal.subtotal
                ? true
                : false
            }
            theme={theme}
          >
            Checkout (${shoppingCartTotal.subtotal.toFixed(2)})
          </Button>
        </div>
      ) : null}
    </>
  );
};

export default ShoppingCarCheckoutButton;
