import { useRecoilState } from 'recoil';

import { ShowShoppingCartAtom } from '../../../state/ShoppingCartState';

import useStyles from './css';

const ShoppingCartButton = () => {
  const [, setShowShoppingCart] = useRecoilState(ShowShoppingCartAtom);
  const styles = useStyles();

  return (
    <div className={styles.shoppingCartButtonBox}>
      <button
        className={styles.shoppingCartButton}
        onClick={() => setShowShoppingCart(true)}
      >
        View Order (2 Items)
      </button>
    </div>
  );
};

export default ShoppingCartButton;
