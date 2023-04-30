import { useMemo } from 'react';

import { useRecoilValue } from 'recoil';

import { ShoppingCartAtom } from '../../../state/ShoppingCartState';
import calculateShoppingCartItemTotal from '../../../utils/calculateShoppingCartItemTotal';
import Button from '../../Button/Button';

import useStyles from './css';

const ShoppingCarCheckoutButton = () => {
  const styles = useStyles();

  const shoppingCart = useRecoilValue(ShoppingCartAtom);

  const totalPrice = useMemo(() => {
    let total = 0;

    shoppingCart.forEach((item) => {
      total += parseFloat(
        calculateShoppingCartItemTotal(
          {
            food: item.food,
            selectedSize: item.selectedSize,
            quantity: item.quantity,
          },
          item.selectedItems,
        ),
      );
    });

    return total.toFixed(2);
  }, [shoppingCart]);

  return (
    <>
      {shoppingCart.length > 0 ? (
        <div className={styles.shoppingCartModalButtonBox}>
          <Button>Checkout (${totalPrice})</Button>
        </div>
      ) : null}
    </>
  );
};

export default ShoppingCarCheckoutButton;
