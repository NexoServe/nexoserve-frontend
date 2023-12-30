import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import SkeletonLoader from 'tiny-skeleton-loader-react';

import { OrderIsPickUpStateAtom } from '../../../state/OrderNavbar';
import { RestaurantDetailsAtom } from '../../../state/RestaurantState';
import { ShoppingCartTotalAtom } from '../../../state/ShoppingCartState';
import Divider from '../../Divider/Divider';
import ShoppingCartCheckoutTips from '../ShoppingCartCheckoutTips/ShoppingCartCheckoutTips';

import useStyles from './css';
import { IShoppingCartCheckout } from './types';

const ShoppingCartCheckout = ({ theme }: IShoppingCartCheckout) => {
  const shoppingCartTotal = useRecoilValue(ShoppingCartTotalAtom);
  const isPickUp = useRecoilValue(OrderIsPickUpStateAtom);
  const restaurantDetails = useRecoilValue(RestaurantDetailsAtom);

  const classes = useStyles({
    theme,
  });

  return (
    <>
      <div className={classes.shoppingCartCheckoutLinkBox}>
        <Link className={classes.shoppingCartCheckoutLink} href={'/'}>
          Add Another Item
        </Link>
      </div>

      <Divider theme={theme} />
      <div className={classes.shoppingCartCheckout}>
        <div className={classes.shoppingCartCheckoutInner}>
          <h4 className={classes.shoppingCartCheckoutLabel}>Subtotal: </h4>
          {shoppingCartTotal.isLoading ? (
            <SkeletonLoader background={theme.neutral} width={50} />
          ) : (
            <div>${shoppingCartTotal.subtotal.toFixed(2)}</div>
          )}
        </div>
        <div className={classes.shoppingCartCheckoutInner}>
          <h4 className={classes.shoppingCartCheckoutLabel}>Tax: </h4>
          {shoppingCartTotal.isLoading ? (
            <SkeletonLoader background={theme.neutral} width={50} />
          ) : (
            <div>${shoppingCartTotal.tax?.toFixed(2)}</div>
          )}
        </div>
        {!isPickUp && (
          <div className={classes.shoppingCartCheckoutInner}>
            <h4 className={classes.shoppingCartCheckoutLabel}>Delivery Fee:</h4>
            {shoppingCartTotal.isLoading ? (
              <SkeletonLoader background={theme.neutral} width={50} />
            ) : (
              <div>${restaurantDetails?.deliveryFee?.toFixed(2)}</div>
            )}
          </div>
        )}

        <div className={classes.shoppingCartCheckoutInner}>
          <h4 className={classes.shoppingCartCheckoutLabel}>Tip: </h4>
          {shoppingCartTotal.isLoading ? (
            <SkeletonLoader background={theme.neutral} width={50} />
          ) : (
            <div>${shoppingCartTotal.tip?.toFixed(2)}</div>
          )}
        </div>

        <ShoppingCartCheckoutTips theme={theme} />

        <div className={classes.shoppingCartCheckoutInner}>
          <h4
            className={`${classes.shoppingCartCheckoutLabel} ${classes.shoppingCartCheckoutTotalLabel}`}
          >
            Total:{' '}
          </h4>
          {shoppingCartTotal.isLoading ? (
            <SkeletonLoader background={theme.neutral} width={50} />
          ) : (
            <div className={classes.shoppingCartCheckoutTotalDiv}>
              ${shoppingCartTotal.grandTotal?.toFixed(2)}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingCartCheckout;
