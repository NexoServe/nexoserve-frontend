import { useDragControls } from 'framer-motion';

import ShoppingCartHeader from '../ShoppingCartHeader/ShoppingCartHeader';

import useStyles from './css';

const ShoppingCart = ({}) => {
  const styles = useStyles();
  const controls = useDragControls();

  return (
    <div className={styles.shoppingCart}>
      <ShoppingCartHeader />
    </div>
  );
};

export default ShoppingCart;
