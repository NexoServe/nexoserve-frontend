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

  const validItems = shoppingCartItemsParsed?.filter((item) => {
    if (typeof item === 'object' && !Array.isArray(item)) {
      // TODO: Find a better way to validate this
      const requiredProperties = ['orderItemId', 'food', 'quantity'];
      if (!requiredProperties.every((prop) => item.hasOwnProperty(prop))) {
        return false;
      }

      if (
        item.hasOwnProperty('selectedOptions') &&
        !Array.isArray(item.selectedOptions)
      ) {
        return false;
      }

      return true;
    } else {
      return false;
    }
  });

  localStorage.setItem('shoppingCartItems', JSON.stringify(validItems));

  const shoppingCartInput = getShoppingCartInput();

  if (shoppingCartInput?.length > 0) {
    async function fetchData() {
      try {
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
      } catch (error: any) {
        throw new Error(error);
      }
    }

    fetchData();
  }
};

export default fetchShoppingCart;
