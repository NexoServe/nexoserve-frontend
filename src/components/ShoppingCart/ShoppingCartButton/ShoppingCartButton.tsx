import { useRecoilState, useRecoilValue } from 'recoil';

import {
  ShoppingCartAtom,
  ShowShoppingCartAtom,
} from '../../../state/ShoppingCartState';
import Button from '../../Button/Button';

import useStyles from './css';
import { IShoppingCartButton } from './types';

const ShoppingCartButton = ({ theme }: IShoppingCartButton) => {
  const [, setShowShoppingCart] = useRecoilState(ShowShoppingCartAtom);
  const shoppingCart = useRecoilValue(ShoppingCartAtom);
  const styles = useStyles({
    theme,
  });

  return (
    <>
      {shoppingCart.length > 0 ? (
        <div className={styles.shoppingCartButtonBox}>
          <Button theme={theme} onClick={() => setShowShoppingCart(true)}>
            View Order ({shoppingCart.length} Items)
          </Button>
        </div>
      ) : null}
    </>
  );
};

export default ShoppingCartButton;
