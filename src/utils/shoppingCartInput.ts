import {
  OptionWithSizeInput,
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

  const shoppingCartInput: OrderItemInput[] = shoppingCartItemsParsed?.map(
    (item) => {
      const orderItem: OrderItemInput = {
        id: item?.orderItemId as string,
        foodId: item?.food?.id as string,
        foodSizeId: item?.selectedSize?.id,
        options: item?.selectedOptions?.map((selectedOption) => {
          const option: OptionWithSizeInput = {
            id: selectedOption?.id as string,
            optionSizeId: selectedOption?.optionSize?.id as string,
            addOnName: selectedOption?.addOnName as string,
          };
          return option;
        }) as OptionWithSizeInput[],
        quantity: item?.quantity,
      };

      return orderItem;
    },
  );

  return shoppingCartInput;
};

export default getShoppingCartInput;
