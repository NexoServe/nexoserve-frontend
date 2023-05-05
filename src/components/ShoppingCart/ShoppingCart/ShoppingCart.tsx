import { useEffect } from 'react';

import classNames from 'classnames';
import { useRecoilState } from 'recoil';

import {
  ShoppingCartInput,
  ShoppingCartItem,
  ShoppingCartItemInput,
  useValidateShoppingCartLazyQuery,
} from '../../../../generated/graphql';
import {
  ShoppingCartAtom,
  ShoppingCartTotalAtom,
} from '../../../state/ShoppingCartState';
import ShoppingCarCheckoutButton from '../ShoppingCarCheckoutButton/ShoppingCartButton';
import ShoppingCartHeader from '../ShoppingCartHeader/ShoppingCartHeader';
import ShoppingCartItemList from '../ShoppingCartItemList/ShoppingCartItemList';

import useStyles from './css';
import { IShoppingCart } from './types';

const ShoppingCart = ({ styleClass }: IShoppingCart) => {
  const [shoppingCart, setShoppingCart] = useRecoilState(ShoppingCartAtom);
  const [, setShoppingCartTotal] = useRecoilState(ShoppingCartTotalAtom);

  const [fetchValidateShoppingCart, { data }] =
    useValidateShoppingCartLazyQuery();

  useEffect(() => {
    if (shoppingCart.length <= 0) {
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

      const shoppingCartInput: ShoppingCartInput[] =
        shoppingCartItemsParsed?.map((item) => {
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
          };
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
    }
  }, []);

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
        total: data?.validateShoppingCart.grandTotal as number,
      });
    }
  }, [data]);

  const classes = useStyles();

  return (
    <div className={classNames(styleClass, classes.shoppingCart)}>
      <div className={classes.shoppingCartInner}>
        <ShoppingCartHeader />
        <ShoppingCartItemList />
        <ShoppingCarCheckoutButton
          validatedTotal={data?.validateShoppingCart?.grandTotal}
        />
      </div>
    </div>
  );
};

export default ShoppingCart;
