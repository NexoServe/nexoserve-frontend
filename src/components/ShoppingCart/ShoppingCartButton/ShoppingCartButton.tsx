import { useRecoilState, useRecoilValue } from 'recoil';

import {
  ShoppingCartAtom,
  ShowShoppingCartAtom,
} from '../../../state/ShoppingCartState';
import Button from '../../Button/Button';

import useStyles from './css';

const ShoppingCartButton = () => {
  const [, setShowShoppingCart] = useRecoilState(ShowShoppingCartAtom);
  const shoppingCart = useRecoilValue(ShoppingCartAtom);
  const styles = useStyles();

  return (
    <>
      {shoppingCart.length > 0 ? (
        <div className={styles.shoppingCartButtonBox}>
          <Button onClick={() => setShowShoppingCart(true)}>
            View Order ({shoppingCart.length} Items)
          </Button>
        </div>
      ) : null}
    </>
  );
};

export default ShoppingCartButton;
