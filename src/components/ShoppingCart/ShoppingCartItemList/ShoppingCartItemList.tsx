import { useEffect } from 'react';

import { useRecoilState } from 'recoil';

import {
  ShoppingCartAtom,
  ShoppingCartItemType,
} from '../../../state/ShoppingCartState';
import Divider from '../../Divider/Divider';
import SvgIcons from '../../SvgIcons';
import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem';
import ShoppingCartShowDetailsBtn from '../ShoppingCartShowDetailsBtn/ShoppingCartShowDetailsBtn';

import useStyles from './css';
import { IShoppingCartItemList } from './types';

const ShoppingCartItemList = ({ validatedData }: IShoppingCartItemList) => {
  const [shoppingCart, setShoppingCart] = useRecoilState(ShoppingCartAtom);

  useEffect(() => {
    const shoppingCartItems = localStorage.getItem('shoppingCartItems');
    let shoppingCartItemsParsed: ShoppingCartItemType[] = [];
    try {
      shoppingCartItemsParsed = JSON.parse(shoppingCartItems as string);
    } catch (error) {
      localStorage.removeItem('shoppingCartItems');
    }

    shoppingCartItemsParsed = shoppingCartItemsParsed?.filter((item) => {
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

    localStorage.setItem(
      'shoppingCartItems',
      JSON.stringify(shoppingCartItemsParsed),
    );

    setShoppingCart(
      shoppingCartItemsParsed?.length > 0 ? shoppingCartItemsParsed : [],
    );
  }, [setShoppingCart]);

  const classes = useStyles();

  return (
    <div className={classes.shoppingCartItemList}>
      {shoppingCart.length <= 0 ? (
        <div className={classes.shoppingCartItemListEmpty}>
          <SvgIcons
            styleClass={classes.shoppingCartItemListEmptySvg}
            name="emptyCart"
          />
          <p className={classes.shoppingCartItemListEmptyText}>
            Your cart is empty
          </p>
        </div>
      ) : (
        <>
          <ShoppingCartShowDetailsBtn
            styleClass={classes.shoppingCartItemListShowDetails}
          />
          {shoppingCart.map((shoppingCartItem) => (
            <>
              <ShoppingCartItem
                shoppingCartItem={shoppingCartItem}
                key={shoppingCartItem.orderItemId}
              />
              <Divider />
            </>
          ))}
        </>
      )}
    </div>
  );
};

export default ShoppingCartItemList;
