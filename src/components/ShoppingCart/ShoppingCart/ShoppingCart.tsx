import classNames from 'classnames';

import ShoppingCarCheckoutButton from '../ShoppingCarCheckoutButton/ShoppingCartButton';
import ShoppingCartHeader from '../ShoppingCartHeader/ShoppingCartHeader';
import ShoppingCartItemList from '../ShoppingCartItemList/ShoppingCartItemList';

import useStyles from './css';
import { IShoppingCart } from './types';

const ShoppingCart = ({ styleClass }: IShoppingCart) => {
  const styles = useStyles();
  // const controls = useDragControls();

  return (
    <div className={classNames(styles.shoppingCart, styleClass)}>
      <ShoppingCartHeader />
      <ShoppingCartItemList />
      <ShoppingCarCheckoutButton />
    </div>
  );
};

export default ShoppingCart;
