import { useRecoilState } from 'recoil';

import { ShowShoppingCartAtom } from '../../../state/ShoppingCartState';
import Divider from '../../Divider/Divider';

import useStyles from './css';

const ShoppingCartHeader = () => {
  const [, setShowShoppingCart] = useRecoilState(ShowShoppingCartAtom);
  const styles = useStyles();

  return (
    <>
      <div className={styles.shoppingCartHeader}>
        <h3 className={styles.shoppingCartHeaderTitle}>Your Order</h3>
        <button onClick={() => setShowShoppingCart(false)}>exit</button>
      </div>
      <Divider />
    </>
  );
};

export default ShoppingCartHeader;
