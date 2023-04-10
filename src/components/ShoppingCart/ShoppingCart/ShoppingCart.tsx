import classNames from 'classnames';

import ShoppingCarCheckoutButton from '../ShoppingCarCheckoutButton/ShoppingCartButton';
import ShoppingCartHeader from '../ShoppingCartHeader/ShoppingCartHeader';
import ShoppingCartItemList from '../ShoppingCartItemList/ShoppingCartItemList';

import useStyles from './css';
import { IShoppingCart } from './types';

const ShoppingCart = ({ styleClass }: IShoppingCart) => {
  const classes = useStyles();
  // const controls = useDragControls();

  return (
    <div className={classNames(styleClass, classes.shoppingCart)}>
      <div className={classes.shoppingCartInner}>
        <ShoppingCartHeader />
        <ShoppingCartItemList />
        <ShoppingCarCheckoutButton />
      </div>
    </div>
  );
};

export default ShoppingCart;
