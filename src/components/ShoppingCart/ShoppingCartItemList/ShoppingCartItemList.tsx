import Divider from '../../Divider/Divider';
import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem';

import useStyles from './css';

const ShoppingCartItemList = () => {
  const classes = useStyles();

  return (
    <div className={classes.shoppingCartItemList}>
      {[
        Object.create({
          id: '123',
          name: 'hey',
          price: 2,
        }),
        Object.create({
          id: '1235',
          name: 'hey',
          price: 2,
        }),
      ].map((shoppingCartItem) => (
        <>
          <ShoppingCartItem key={shoppingCartItem.id} />
          <Divider />
        </>
      ))}
    </div>
  );
};

export default ShoppingCartItemList;
