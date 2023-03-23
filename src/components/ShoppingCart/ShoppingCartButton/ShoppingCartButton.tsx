import { useRecoilState } from 'recoil';

import { ShowShoppingCartAtom } from '../../../state/ShoppingCartState';
import Button from '../../Button/Button';

import useStyles from './css';

const ShoppingCartButton = () => {
  const [, setShowShoppingCart] = useRecoilState(ShowShoppingCartAtom);
  const styles = useStyles();

  return (
    <div className={styles.shoppingCartButtonBox}>
      <Button onClick={() => setShowShoppingCart(true)}>
        View Order (2 Items)
      </Button>
    </div>
  );
};

export default ShoppingCartButton;
