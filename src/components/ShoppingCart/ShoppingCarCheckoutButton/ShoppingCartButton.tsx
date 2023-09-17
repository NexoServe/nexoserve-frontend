import { useEffect } from 'react';

import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';

import { ItemWithSizeType } from '../../../../generated/graphql';
import {
  ShoppingCartAtom,
  ShoppingCartTotalAtom,
} from '../../../state/ShoppingCartState';
import calculateShoppingCartItemTotal from '../../../utils/calculateShoppingCartItemTotal';
import Button from '../../Button/Button';

import useStyles from './css';

const ShoppingCarCheckoutButton = () => {
  const styles = useStyles();
  const router = useRouter();

  const [shoppingCartTotal, setShoppingCartTotal] = useRecoilState(
    ShoppingCartTotalAtom,
  );

  const shoppingCart = useRecoilValue(ShoppingCartAtom);

  useEffect(() => {
    if (!shoppingCartTotal.isValidated) {
      let total = 0;

      shoppingCart.forEach((item) => {
        total += calculateShoppingCartItemTotal(
          {
            food: item.food,
            selectedSize: item.selectedSize,
            quantity: item.quantity,
          },
          item?.selectedItems as ItemWithSizeType[],
        );
      });

      setShoppingCartTotal({
        ...shoppingCartTotal,
        subtotal: parseFloat(total.toFixed(2)),
      });
    }
  }, [shoppingCart]);

  return (
    <>
      {shoppingCart.length > 0 ? (
        <div className={styles.shoppingCartModalButtonBox}>
          <Button onClick={() => router.push('/checkout')}>
            Checkout (${shoppingCartTotal.subtotal.toFixed(2)})
          </Button>
        </div>
      ) : null}
    </>
  );
};

export default ShoppingCarCheckoutButton;
