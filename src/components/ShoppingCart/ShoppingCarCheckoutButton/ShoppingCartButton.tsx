import { useRecoilState } from 'recoil';

import { ShowShoppingCartAtom } from '../../../state/ShoppingCartState';
import Button from '../../Button/Button';

import useStyles from './css';

const ShoppingCarCheckoutButton = () => {
  const [, setShowShoppingCart] = useRecoilState(ShowShoppingCartAtom);
  const styles = useStyles();

  return (
    <div className={styles.shoppingCartModalButtonBox}>
      <Button onClick={() => setShowShoppingCart(true)}>
        Checkout ($54.52)
      </Button>
    </div>
  );
};

export default ShoppingCarCheckoutButton;
