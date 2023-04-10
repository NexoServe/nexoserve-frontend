import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useRecoilState } from 'recoil';

import { ShowShoppingCartDetailsAtom } from '../../../state/ShoppingCartState';
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

  return (
    <div className={classNames(styleClass, classes.shoppingCartShowDetailsBtn)}>
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
    </div>
  );
};

export default ShoppingCartShowDetailsBtn;
