import { LazyQueryExecFunction } from '@apollo/client';

import {
  CreateOrderInput,
  Exact,
  ShoppingCartItem,
  ValidateShoppingCartQuery,
} from '../../generated/graphql';
import { OrderTime } from '../state/OrderNavbar';
import { ShoppingCartTipType } from '../state/ShoppingCartState';

import getShoppingCartInput from './shoppingCartInput';

type FetchShoppingCartType = {
  fetchValidateShoppingCart: LazyQueryExecFunction<
    ValidateShoppingCartQuery,
    Exact<{
      order: CreateOrderInput;
    }>
  >;
  shoppingCartTip: ShoppingCartTipType;
};

const fetchShoppingCart = ({
  fetchValidateShoppingCart,
  shoppingCartTip,
}: FetchShoppingCartType) => {
  const shoppingCartItems = localStorage.getItem('shoppingCartItems');
  const isPickUp = localStorage.getItem('isPickUp');
  const orderTime = localStorage.getItem('orderTime');

  let shoppingCartItemsParsed: ShoppingCartItem[] = [];
  let orderTimeParsed: OrderTime | null = null;

  try {
    shoppingCartItemsParsed = JSON.parse(shoppingCartItems as string);
    orderTimeParsed = JSON.parse(orderTime as string);
  } catch (error) {
    localStorage.removeItem('shoppingCartItems');
  }

  console.log('shoppingCartItemsParsed', shoppingCartItemsParsed);

  shoppingCartItemsParsed?.filter((item) => {
    if (typeof item === 'object' && !Array.isArray(item)) {
      const requiredProperties = [
        'orderItemId',
        'food',
        'quantity',
        'selectedItems',
        'selectedSize',
      ];
      if (!requiredProperties.every((prop) => item.hasOwnProperty(prop))) {
        return false;
      }

      return true;
    } else {
      return false;
    }
  });

  const shoppingCartInput = getShoppingCartInput();

  if (shoppingCartInput?.length > 0) {
    async function fetchData() {
      await fetchValidateShoppingCart({
        variables: {
          order: {
            restaurantId: process.env.NEXT_PUBLIC_RESTAURANT_ID as string,
            orderItems: shoppingCartInput,
            tip: shoppingCartTip.tip,
            isTipPercentage: shoppingCartTip.isTipPercentage,
            isPickUp: isPickUp === 'true',
            orderTime: orderTimeParsed?.value?.toString() as string,
          },
        },
      });
    }

    fetchData();
  }
};

export default fetchShoppingCart;
