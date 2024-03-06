import { useState } from 'react';

import { useRecoilState } from 'recoil';

import { ShoppingCartTipAtom } from '../../../state/ShoppingCartState';
import { ModalPopUp } from '../../Modal/Modal';
import ShoppingCartCheckoutTipsModal from '../ShoppingCartCheckoutTipsModal/ShoppingCartCheckoutTipsModal';

import useStyles from './css';
import { IShoppingCartCheckoutTips } from './types';

const ShoppingCartCheckoutTips = ({ theme }: IShoppingCartCheckoutTips) => {
  const [shoppingCartTip, setShoppingCartTip] =
    useRecoilState(ShoppingCartTipAtom);
  const [showCustomTip, setShowCustomTip] = useState(false);

  const classes = useStyles({
    theme,
  });
  return (
    <>
      <span className={classes.shoppingCartCheckoutTipsSpan}>
        *All tips support our local business
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
            shoppingCartTip.isTipPercentage === true &&
            shoppingCartTip.tip === 10 &&
            classes.shoppingCartCheckoutTipActive
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
            shoppingCartTip.isTipPercentage === true &&
            shoppingCartTip.tip === 15 &&
            classes.shoppingCartCheckoutTipActive
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
            shoppingCartTip.isTipPercentage === true &&
            shoppingCartTip.tip === 20 &&
            classes.shoppingCartCheckoutTipActive
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
            shoppingCartTip.tip !== 0 &&
            classes.shoppingCartCheckoutTipActive
          }`}
          onClick={() => setShowCustomTip(true)}
        >
          Custom
        </button>
      </div>

      <ModalPopUp
        showModal={showCustomTip}
        onClose={() => {
          setShowCustomTip(false);
        }}
        theme={theme}
      >
        <ShoppingCartCheckoutTipsModal
          theme={theme}
          setShowCustomTip={setShowCustomTip}
        />
      </ModalPopUp>
    </>
  );
};

export default ShoppingCartCheckoutTips;
