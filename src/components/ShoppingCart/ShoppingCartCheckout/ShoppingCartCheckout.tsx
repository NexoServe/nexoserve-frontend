import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import SkeletonLoader from 'tiny-skeleton-loader-react';

import colors from '../../../../css/colors';
import { ShoppingCartTotalAtom } from '../../../state/ShoppingCartState';
import Divider from '../../Divider/Divider';
import ShoppingCartCheckoutTips from '../ShoppingCartCheckoutTips/ShoppingCartCheckoutTips';

import useStyles from './css';

const ShoppingCartCheckout = () => {
  const shoppingCartTotal = useRecoilValue(ShoppingCartTotalAtom);

  const classes = useStyles();
  return (
    <>
      <div className={classes.shoppingCartCheckoutLinkBox}>
        <Link href={'/'}>
          <a className={classes.shoppingCartCheckoutLink}>Add Another Item</a>
        </Link>
      </div>

      <Divider />
      <div className={classes.shoppingCartCheckout}>
        <div className={classes.shoppingCartCheckoutInner}>
          <h4 className={classes.shoppingCartCheckoutLabel}>Subtotal: </h4>
          {shoppingCartTotal.isLoading ? (
            <SkeletonLoader background={colors.darkGray} width={50} />
          ) : (
            <div>${shoppingCartTotal.subtotal.toFixed(2)}</div>
          )}
        </div>
        <div className={classes.shoppingCartCheckoutInner}>
          <h4 className={classes.shoppingCartCheckoutLabel}>Tax: </h4>
          {shoppingCartTotal.isLoading ? (
            <SkeletonLoader background={colors.darkGray} width={50} />
          ) : (
            <div>${shoppingCartTotal.tax?.toFixed(2)}</div>
          )}
        </div>
        <div className={classes.shoppingCartCheckoutInner}>
          <h4 className={classes.shoppingCartCheckoutLabel}>Tip: </h4>
          {shoppingCartTotal.isLoading ? (
            <SkeletonLoader background={colors.darkGray} width={50} />
          ) : (
            <div>${shoppingCartTotal.tip?.toFixed(2)}</div>
          )}
        </div>

        <ShoppingCartCheckoutTips />

        <div className={classes.shoppingCartCheckoutInner}>
          <h4
            className={`${classes.shoppingCartCheckoutLabel} ${classes.shoppingCartCheckoutTotalLabel}`}
          >
            Total:{' '}
          </h4>
          {shoppingCartTotal.isLoading ? (
            <SkeletonLoader background={colors.darkGray} width={50} />
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
