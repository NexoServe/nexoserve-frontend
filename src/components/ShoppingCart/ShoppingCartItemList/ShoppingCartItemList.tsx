import { useRecoilValue } from 'recoil';

import { ShoppingCartAtom } from '../../../state/ShoppingCartState';
import Divider from '../../Divider/Divider';
import SvgIcons from '../../SvgIcons';
import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem';
import ShoppingCartShowDetailsBtn from '../ShoppingCartShowDetailsBtn/ShoppingCartShowDetailsBtn';

import useStyles from './css';

const ShoppingCartItemList = () => {
  const shoppingCart = useRecoilValue(ShoppingCartAtom);

  const classes = useStyles();

  return (
    <div className={classes.shoppingCartItemList}>
      {shoppingCart.length <= 0 && shoppingCart ? (
        <div className={classes.shoppingCartItemListEmpty}>
          <SvgIcons
            styleClass={classes.shoppingCartItemListEmptySvg}
            name="emptyCart"
          />
          <p className={classes.shoppingCartItemListEmptyText}>
            Your cart is empty
          </p>
        </div>
      ) : (
        <>
          <ShoppingCartShowDetailsBtn
            styleClass={classes.shoppingCartItemListShowDetails}
          />
          {shoppingCart.map((shoppingCartItem) => (
            <>
              <ShoppingCartItem
                shoppingCartItem={shoppingCartItem}
                key={shoppingCartItem.orderItemId}
              />
              <Divider />
            </>
          ))}
        </>
      )}
    </div>
  );
};

export default ShoppingCartItemList;
