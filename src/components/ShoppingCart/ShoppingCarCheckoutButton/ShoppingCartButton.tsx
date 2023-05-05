import { useMemo } from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';

import { SelectedItem } from '../../../../generated/graphql';
import {
  ShoppingCartAtom,
  ShoppingCartTotalAtom,
} from '../../../state/ShoppingCartState';
import calculateShoppingCartItemTotal from '../../../utils/calculateShoppingCartItemTotal';
import Button from '../../Button/Button';

import useStyles from './css';
import { IShoppingCartCheckoutButton } from './types';

const ShoppingCarCheckoutButton = ({
  validatedTotal,
}: IShoppingCartCheckoutButton) => {
  const styles = useStyles();

  const [shoppingCartTotal, setShoppingCartTotal] = useRecoilState(
    ShoppingCartTotalAtom,
  );

  const shoppingCart = useRecoilValue(ShoppingCartAtom);

  const totalPrice = useMemo(() => {
    if (!shoppingCartTotal.isValidated) {
      let total = 0;

      shoppingCart.forEach((item) => {
        total += parseFloat(
          calculateShoppingCartItemTotal(
            {
              food: item.food,
              selectedSize: item.selectedSize,
              quantity: item.quantity,
            },
            item?.selectedItems as SelectedItem[],
          ),
        );
        console.log('TOTAL', total);
      });

      setShoppingCartTotal({
        ...shoppingCartTotal,
        total: parseFloat(total.toFixed(2)),
      });

      return total.toFixed(2);
    }
  }, [shoppingCart]);

  console.log('totalPrice', totalPrice);

  return (
    <>
      {shoppingCart.length > 0 ? (
        <div className={styles.shoppingCartModalButtonBox}>
          <Button>Checkout ${shoppingCartTotal.total.toFixed(2)}</Button>
        </div>
      ) : null}
    </>
  );
};

export default ShoppingCarCheckoutButton;
