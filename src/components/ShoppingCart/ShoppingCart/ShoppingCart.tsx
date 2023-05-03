import { useEffect, useMemo } from 'react';

import classNames from 'classnames';
import { useRecoilState } from 'recoil';

import {
  ShoppingCartItem,
  useValidateShoppingCartLazyQuery,
} from '../../../../generated/graphql';
import { ShoppingCartAtom } from '../../../state/ShoppingCartState';
import ShoppingCarCheckoutButton from '../ShoppingCarCheckoutButton/ShoppingCartButton';
import ShoppingCartHeader from '../ShoppingCartHeader/ShoppingCartHeader';
import ShoppingCartItemList from '../ShoppingCartItemList/ShoppingCartItemList';

import useStyles from './css';
import { IShoppingCart } from './types';

const ShoppingCart = ({ styleClass }: IShoppingCart) => {
  const [shoppingCart, setShoppingCart] = useRecoilState(ShoppingCartAtom);

  const shoppingCartData = useMemo(() => {
    return shoppingCart.map((item) => {
      return {
        orderItemId: item?.orderItemId,
        foodId: item?.food?.id as string,
        foodSizeId: item?.selectedSize?.id,
        items: item?.selectedItems?.map((selectedItem) => {
          return {
            itemId: selectedItem.id as string,
            itemSizeId: selectedItem?.itemSize?.id,
          };
        }),
        quantity: item?.quantity,
      };
    });
  }, [shoppingCart]);

  const [fetchValidateShoppingCart, { data }] =
    useValidateShoppingCartLazyQuery();

  useEffect(() => {
    if (shoppingCartData.length > 0) {
      async function fetchData() {
        await fetchValidateShoppingCart({
          variables: {
            input: shoppingCartData,
          },
        });
      }

      fetchData();
    }
  }, [shoppingCartData]);

  // console.log('data', data);

  const classes = useStyles();

  return (
    <div className={classNames(styleClass, classes.shoppingCart)}>
      <div className={classes.shoppingCartInner}>
        <ShoppingCartHeader />
        <ShoppingCartItemList
          validatedData={
            data?.validateShoppingCart?.shoppingCartItems as ShoppingCartItem[]
          }
        />
        <ShoppingCarCheckoutButton
          validatedTotal={data?.validateShoppingCart?.grandTotal}
        />
      </div>
    </div>
  );
};

export default ShoppingCart;
