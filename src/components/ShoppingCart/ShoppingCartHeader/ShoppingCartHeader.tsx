import { useRecoilState } from 'recoil';

import { ShowShoppingCartAtom } from '../../../state/ShoppingCartState';
import Divider from '../../Divider/Divider';
import SvgIcons from '../../SvgIcons';
import ShoppingCartShowDetailsBtn from '../ShoppingCartShowDetailsBtn/ShoppingCartShowDetailsBtn';

import useStyles from './css';

const ShoppingCartHeader = () => {
  const [, setShowShoppingCart] = useRecoilState(ShowShoppingCartAtom);
  const classes = useStyles();

  return (
    <>
      <div className={classes.shoppingCartHeader}>
        <h3 className={classes.shoppingCartHeaderTitle}>Your Order</h3>
        <button
          className={classes.shoppingCartHeaderCloseButton}
          onClick={() => setShowShoppingCart(false)}
        >
          <SvgIcons name="close" />
        </button>
        <ShoppingCartShowDetailsBtn
          styleClass={classes.shoppingCartHeaderShowDetails}
        />
      </div>
      <Divider />
    </>
  );
};

export default ShoppingCartHeader;
