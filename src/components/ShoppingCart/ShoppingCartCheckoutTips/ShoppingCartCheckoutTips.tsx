import { useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import { useRecoilState } from 'recoil';

import { ShoppingCartTipAtom } from '../../../state/ShoppingCartState';
import { ModalPopUp } from '../../Modal/Modal';

import useStyles from './css';

const ShoppingCartCheckoutTips = () => {
  const [shoppingCartTip, setShoppingCartTip] =
    useRecoilState(ShoppingCartTipAtom);
  const [showCustomTip, setShowCustomTip] = useState(false);

  const classes = useStyles();
  return (
    <>
      <span className={classes.shoppingCartCheckoutTipsSpan}>
        *All tips support the local business
      </span>
      <div className={classes.shoppingCartCheckoutTips}>
        <button
          className={`${classes.shoppingCartCheckoutTip} ${
            shoppingCartTip.tip === 0 && classes.shoppingCartCheckoutTipActive
          }`}
          onClick={() =>
            setShoppingCartTip({
              isTipPercentage: true,
              tip: 0,
            })
          }
        >
          None
        </button>
        <button
          className={`${classes.shoppingCartCheckoutTip} ${
            shoppingCartTip.tip === 10 && classes.shoppingCartCheckoutTipActive
          }`}
          onClick={() =>
            setShoppingCartTip({
              isTipPercentage: true,
              tip: 10,
            })
          }
        >
          10%
        </button>
        <button
          className={`${classes.shoppingCartCheckoutTip} ${
            shoppingCartTip.tip === 15 && classes.shoppingCartCheckoutTipActive
          }`}
          onClick={() =>
            setShoppingCartTip({
              isTipPercentage: true,
              tip: 15,
            })
          }
        >
          15%
        </button>
        <button
          className={`${classes.shoppingCartCheckoutTip} ${
            shoppingCartTip.tip === 20 && classes.shoppingCartCheckoutTipActive
          }`}
          onClick={() =>
            setShoppingCartTip({
              isTipPercentage: true,
              tip: 20,
            })
          }
        >
          20%
        </button>
        <button
          className={`${classes.shoppingCartCheckoutTip} ${
            shoppingCartTip.isTipPercentage === false &&
            classes.shoppingCartCheckoutTipActive
          }`}
          onClick={() => setShowCustomTip(true)}
        >
          Custom
        </button>
      </div>

      <AnimatePresence>
        {showCustomTip && (
          <ModalPopUp
            showModal={showCustomTip}
            onClose={() => {
              setShowCustomTip(false);
            }}
          >
            <div>
              <div className={classes.shoppingCartCheckoutModal}>hey</div>
            </div>
          </ModalPopUp>
        )}
      </AnimatePresence>
    </>
  );
};

export default ShoppingCartCheckoutTips;
