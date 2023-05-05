import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useRecoilState, useRecoilValue } from 'recoil';

import {
  ShoppingCartAtom,
  ShowShoppingCartDetailsAtom,
} from '../../../state/ShoppingCartState';
import SvgIcons from '../../SvgIcons';

import useStyles from './css';
import { IShoppingCartShowDetailsBtn } from './types';

const ShoppingCartShowDetailsBtn = ({
  styleClass,
}: IShoppingCartShowDetailsBtn) => {
  const classes = useStyles();

  const [showShoppingCartDetails, setShowShoppingCartDetails] = useRecoilState(
    ShowShoppingCartDetailsAtom,
  );

  const shoppingCart = useRecoilValue(ShoppingCartAtom);

  return (
    <div className={classNames(styleClass, classes.shoppingCartShowDetailsBtn)}>
      {shoppingCart.length > 0 ? (
        <button
          onClick={() => setShowShoppingCartDetails(!showShoppingCartDetails)}
        >
          {showShoppingCartDetails ? 'Hide Details' : 'Show Details'}
          <motion.span
            animate={{ rotate: showShoppingCartDetails ? '180deg' : '0' }}
          >
            <SvgIcons name="arrow" />
          </motion.span>
        </button>
      ) : null}
    </div>
  );
};

export default ShoppingCartShowDetailsBtn;
