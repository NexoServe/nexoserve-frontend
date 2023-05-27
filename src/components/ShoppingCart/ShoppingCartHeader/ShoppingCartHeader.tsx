import { useRecoilState } from 'recoil';

import { ShowShoppingCartAtom } from '../../../state/ShoppingCartState';
import Divider from '../../Divider/Divider';
import SvgIcons from '../../SvgIcons';
import ShoppingCartShowDetailsBtn from '../ShoppingCartShowDetailsBtn/ShoppingCartShowDetailsBtn';

import useStyles from './css';
import { IShoppingCartHeader } from './types';

const ShoppingCartHeader = ({ isCheckout }: IShoppingCartHeader) => {
  const [, setShowShoppingCart] = useRecoilState(ShowShoppingCartAtom);
  const classes = useStyles();

  return (
    <>
      <div className={classes.shoppingCartHeader}>
        <h2 className={classes.shoppingCartHeaderTitle}>Your Order</h2>
        <button
          className={`${classes.shoppingCartHeaderCloseButton} ${
            isCheckout && classes.shoppingCartHeaderCloseButtonCheckout
          }`}
          onClick={() => setShowShoppingCart(false)}
        >
          <SvgIcons name="close" />
        </button>
        <ShoppingCartShowDetailsBtn
          styleClass={`${classes.shoppingCartHeaderShowDetails} ${
            isCheckout && classes.shoppingCartHeaderShowDetailsCheckout
          }`}
        />
      </div>
      <Divider />
    </>
  );
};

export default ShoppingCartHeader;
