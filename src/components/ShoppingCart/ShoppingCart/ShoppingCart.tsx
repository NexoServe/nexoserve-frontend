import { useEffect } from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';

import {
  ShoppingCartItemType,
  useValidateShoppingCartLazyQuery,
} from '../../../../generated/graphql';
import { InfoModalAtom } from '../../../state/InfoModalState';
import { OrderIsPickUpStateAtom } from '../../../state/OrderNavbar';
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
  const [shoppingCartTotal, setShoppingCartTotal] = useRecoilState(
    ShoppingCartTotalAtom,
  );
  const shoppingCartTip = useRecoilValue(ShoppingCartTipAtom);
  const isPickUp = useRecoilValue(OrderIsPickUpStateAtom);
  const [, setInfoModal] = useRecoilState(InfoModalAtom);

  const [fetchValidateShoppingCart, { data, loading, error }] =
    useValidateShoppingCartLazyQuery();

  useEffect(() => {
    try {
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
    } catch (error) {
      setInfoModal({
        showModal: true,
      });
    }
  }, [shoppingCart, isCheckout, shoppingCartTip, isPickUp]);

  useEffect(() => {
    if (error) {
      setInfoModal({
        showModal: true,
      });
    }
  }, [error]);

  useEffect(() => {
    if (loading) {
      setShoppingCartTotal({
        ...shoppingCartTotal,
        isLoading: true,
      });
    } else if (data) {
      const shoppingCartValidated: ShoppingCartItemType[] =
        data?.validateShoppingCart.orderItems.map((shoppingCartItem) => ({
          food: shoppingCartItem?.food,
          orderItemId: shoppingCartItem?.id as string,
          quantity: shoppingCartItem?.quantity as number,
          selectedOptions: shoppingCartItem?.options,
          selectedSize: shoppingCartItem?.foodSize,
          price: shoppingCartItem?.total as number,
        }));

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
        deliveryFee: data.validateShoppingCart.deliveryFee,
        tip:
          data.validateShoppingCart.tip === null
            ? 0
            : data.validateShoppingCart.tip,
        isLoading: false,
      });
    }
  }, [data, loading]);

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
