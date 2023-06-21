import {
  ShoppingCartInput,
  ShoppingCartItem,
  ShoppingCartItemInput,
} from '../../generated/graphql';
import { ShoppingCartTipType } from '../state/ShoppingCartState';

type FetchShoppingCartType = {
  shoppingCartTip: ShoppingCartTipType;
};

const getShoppingCartInput = ({ shoppingCartTip }: FetchShoppingCartType) => {
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

  const shoppingCartInput: ShoppingCartInput[] = shoppingCartItemsParsed?.map(
    (item) => {
      return {
        orderItemId: item?.orderItemId,
        foodId: item?.food?.id as string,
        foodSizeId: item?.selectedSize?.id,
        items: item?.selectedItems?.map((selectedItem) => {
          return {
            itemId: selectedItem?.id as string,
            itemSizeId: selectedItem?.itemSize?.id as string,
            addOnName: selectedItem?.addOnName as string,
          };
        }) as ShoppingCartItemInput[],
        quantity: item?.quantity,
        isTipPercentage: shoppingCartTip.isTipPercentage,
        tip: shoppingCartTip.tip,
      };
    },
  );

  return shoppingCartInput;
};

export default getShoppingCartInput;
