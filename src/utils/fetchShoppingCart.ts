import { LazyQueryExecFunction } from '@apollo/client';

import {
  Exact,
  InputMaybe,
  ShoppingCartInput,
  ShoppingCartItem,
  ValidateShoppingCartQuery,
} from '../../generated/graphql';
import { ShoppingCartTipType } from '../state/ShoppingCartState';

import getShoppingCartInput from './shoppingCartInput';

type FetchShoppingCartType = {
  fetchValidateShoppingCart: LazyQueryExecFunction<
    ValidateShoppingCartQuery,
    Exact<{
      input: InputMaybe<ShoppingCartInput> | InputMaybe<ShoppingCartInput>[];
    }>
  >;
  shoppingCartTip: ShoppingCartTipType;
};

const fetchShoppingCart = ({
  fetchValidateShoppingCart,
  shoppingCartTip,
}: FetchShoppingCartType) => {
  const shoppingCartItems = localStorage.getItem('shoppingCartItems');

  let shoppingCartItemsParsed: ShoppingCartItem[] = [];
  try {
    shoppingCartItemsParsed = JSON.parse(shoppingCartItems as string);
  } catch (error) {
    localStorage.removeItem('shoppingCartItems');
  }

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

  const shoppingCartInput = getShoppingCartInput({
    shoppingCartTip: shoppingCartTip,
  });

  if (shoppingCartInput?.length > 0) {
    async function fetchData() {
      await fetchValidateShoppingCart({
        variables: {
          input: shoppingCartInput,
        },
      });
    }

    fetchData();
  }
};

export default fetchShoppingCart;
