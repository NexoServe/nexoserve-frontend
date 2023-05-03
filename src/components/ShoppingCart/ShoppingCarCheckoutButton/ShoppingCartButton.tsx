import { useMemo } from 'react';

import { useRecoilValue } from 'recoil';

import { ShoppingCartAtom } from '../../../state/ShoppingCartState';
import calculateShoppingCartItemTotal from '../../../utils/calculateShoppingCartItemTotal';
import Button from '../../Button/Button';

import useStyles from './css';
import { IShoppingCartCheckoutButton } from './types';

const ShoppingCarCheckoutButton = ({
  validatedTotal,
}: IShoppingCartCheckoutButton) => {
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
          <Button>
            Checkout (${validatedTotal ? validatedTotal : totalPrice})
          </Button>
        </div>
      ) : null}
    </>
  );
};

export default ShoppingCarCheckoutButton;
