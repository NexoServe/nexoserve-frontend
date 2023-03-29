import { AnimatePresence, motion } from 'framer-motion';

import { base } from '../../../../css/base';
import SvgIcons from '../../SvgIcons';

import useStyles from './css';
import { IShoppingCartItem } from './types';

const ShoppingCartItem = ({ showDetails }: IShoppingCartItem) => {
  const classes = useStyles();

  return (
    <motion.button
      animate={{ rowGap: showDetails ? base(1) : 0 }}
      className={classes.shoppingCartItem}
      onClick={() => console.log('HERE')}
    >
      <div className={classes.shoppingCartItemQuantity}>
        <span>2</span>
      </div>
      <div className={classes.shoppingCartItemContent}>
        <h3 className={classes.shoppingCartItemTitle}>Buffalo Wings</h3>
        <div className={classes.shoppingCartItemPrice}>$22.99</div>
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          initial={{ opacity: 1, height: '100%' }}
          animate={{
            height: showDetails ? '100%' : '0px',
            opacity: showDetails ? 1 : 0,
            pointerEvents: showDetails ? 'all' : 'none',
          }}
          exit={{ opacity: 0, height: '0px' }}
          className={classes.shoppingCartItemDetails}
        >
          <div className={classes.shoppingCartItemDetailsInner}>
            <div className={classes.shoppingCartItemDetailsItem}>6 Wings</div>
            <div className={classes.shoppingCartItemDetailsItem}>
              <span>2</span>Extra Blue Cheese
            </div>
          </div>
          <div className={classes.shoppingCartItemDeleteButton}>
            <button>
              <SvgIcons name="closeFilled" />
            </button>
          </div>
          <div className={classes.shoppingCartItemEditButton}>
            <button>Edit Item</button>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

export default ShoppingCartItem;
