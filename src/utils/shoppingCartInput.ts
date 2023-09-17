import {
  ItemWithSizeInput,
  OrderItemInput,
  ShoppingCartItem,
} from '../../generated/graphql';

const getShoppingCartInput = (): OrderItemInput[] => {
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

  const shoppingCartInput: OrderItemInput[] = shoppingCartItemsParsed?.map(
    (item) => {
      const orderItem: OrderItemInput = {
        id: item?.orderItemId as string,
        foodId: item?.food?.id as string,
        foodSizeId: item?.selectedSize?.id,
        items: item?.selectedItems?.map((selectedItem) => {
          const item: ItemWithSizeInput = {
            id: selectedItem?.id as string,
            itemSizeId: selectedItem?.itemSize?.id as string,
            addOnName: selectedItem?.addOnName as string,
          };
          return item;
        }) as ItemWithSizeInput[],
        quantity: item?.quantity,
      };

      return orderItem;
    },
  );

  return shoppingCartInput;
};

export default getShoppingCartInput;
