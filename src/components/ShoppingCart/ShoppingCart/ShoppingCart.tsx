import { useEffect } from 'react';

import { useRecoilState } from 'recoil';

import {
  ShoppingCartItem,
  useValidateShoppingCartLazyQuery,
} from '../../../../generated/graphql';
import {
  ShoppingCartAtom,
  ShoppingCartTipAtom,
  ShoppingCartTotalAtom,
} from '../../../state/ShoppingCartState';
import fetchShoppingCart from '../../../utils/fetchShoppingCart';
import RoundBorder from '../../RoundBorder/RoundBorder';
import ShoppingCarCheckoutButton from '../ShoppingCarCheckoutButton/ShoppingCartButton';
import ShoppingCartCheckout from '../ShoppingCartCheckout/ShoppingCartCheckout';
import ShoppingCartHeader from '../ShoppingCartHeader/ShoppingCartHeader';
import ShoppingCartItemList from '../ShoppingCartItemList/ShoppingCartItemList';

import useStyles from './css';
import { IShoppingCart } from './types';

const ShoppingCart = ({ styleClass, isCheckout = false }: IShoppingCart) => {
  const [shoppingCart, setShoppingCart] = useRecoilState(ShoppingCartAtom);
  const [, setShoppingCartTotal] = useRecoilState(ShoppingCartTotalAtom);
  const [shoppingCartTip, setShoppingCartTip] =
    useRecoilState(ShoppingCartTipAtom);

  const [fetchValidateShoppingCart, { data }] =
    useValidateShoppingCartLazyQuery();

  useEffect(() => {
    if (isCheckout) {
      fetchShoppingCart({
        fetchValidateShoppingCart: fetchValidateShoppingCart,
        shoppingCartTip: shoppingCartTip,
      });
    } else {
      if (shoppingCart.length <= 0) {
        fetchShoppingCart({
          fetchValidateShoppingCart: fetchValidateShoppingCart,
          shoppingCartTip: shoppingCartTip,
        });
      }
    }
  }, [shoppingCart, isCheckout, shoppingCartTip]);

  useEffect(() => {
    if (data) {
      const shoppingCartValidated: ShoppingCartItem[] =
        data?.validateShoppingCart.shoppingCartItems.map(
          (shoppingCartItem) => ({
            food: shoppingCartItem?.food,
            orderItemId: shoppingCartItem?.orderItemId as string,
            quantity: shoppingCartItem?.quantity as number,
            selectedItems: shoppingCartItem?.selectedItems,
            selectedSize: shoppingCartItem?.selectedSize,
            price: shoppingCartItem?.price as number,
          }),
        );

      setShoppingCart(shoppingCartValidated || []);

      localStorage.setItem(
        'shoppingCartItems',
        JSON.stringify(shoppingCartValidated || []),
      );

      setShoppingCartTotal({
        isValidated: true,
        subtotal: data?.validateShoppingCart.subTotal as number,
        grandTotal: data.validateShoppingCart.grandTotal,
        tax: data.validateShoppingCart.tax,
        tip:
          data.validateShoppingCart.tip === null
            ? 0
            : data.validateShoppingCart.tip,
      });
    }
  }, [data]);

  const classes = useStyles();

  return (
    <div
      className={`${styleClass} ${classes.shoppingCart} ${
        isCheckout ? classes.shoppingCartCheckout : ''
      }`}
    >
      <RoundBorder
        styleClass={`${classes.shoppingCartInner} ${
          isCheckout ? classes.shoppingCartInnerCheckout : ''
        }`}
      >
        <ShoppingCartHeader isCheckout={isCheckout} />
        <ShoppingCartItemList isCheckout={isCheckout} />
        {isCheckout ? <ShoppingCartCheckout /> : <ShoppingCarCheckoutButton />}
      </RoundBorder>
    </div>
  );
};

export default ShoppingCart;
