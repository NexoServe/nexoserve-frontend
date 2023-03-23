import { useDragControls } from 'framer-motion';

import ShoppingCarCheckoutButton from '../ShoppingCarCheckoutButton/ShoppingCartButton';
import ShoppingCartHeader from '../ShoppingCartHeader/ShoppingCartHeader';
import ShoppingCartItemList from '../ShoppingCartItemList/ShoppingCartItemList';

import useStyles from './css';

const ShoppingCart = ({}) => {
  const styles = useStyles();
  const controls = useDragControls();

  return (
    <div className={styles.shoppingCart}>
      <ShoppingCartHeader />
      <ShoppingCartItemList />
      <ShoppingCarCheckoutButton />
    </div>
  );
};

export default ShoppingCart;
