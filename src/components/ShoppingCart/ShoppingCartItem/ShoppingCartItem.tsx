import SvgIcons from '../../SvgIcons';

import useStyles from './css';

const ShoppingCartItem = () => {
  const classes = useStyles();

  return (
    <div className={classes.shoppingCartItem}>
      <div className={classes.shoppingCartItemQuantity}>
        <span>2</span>
      </div>
      <div>
        <h3>Buffalo Wings</h3>
        <div>$22.99</div>
      </div>
      <button>
        <SvgIcons name="closeFilled" />
      </button>
    </div>
  );
};

export default ShoppingCartItem;
