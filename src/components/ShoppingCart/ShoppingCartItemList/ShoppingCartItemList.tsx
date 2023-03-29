import { useState } from 'react';

import { motion } from 'framer-motion';

import Divider from '../../Divider/Divider';
import SvgIcons from '../../SvgIcons';
import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem';

import useStyles from './css';

const ShoppingCartItemList = () => {
  const [showDetails, setShowDetails] = useState(true);
  const classes = useStyles();

  return (
    <div className={classes.shoppingCartItemList}>
      <div className={classes.shoppingCartItemListShowDetails}>
        <button onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? 'Hide Details' : 'Show Details'}{' '}
          <motion.span animate={{ rotate: showDetails ? '180deg' : '0' }}>
            <SvgIcons name="arrow" />
          </motion.span>
        </button>
      </div>
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
          <ShoppingCartItem
            key={shoppingCartItem.id}
            showDetails={showDetails}
          />
          <Divider />
        </>
      ))}
    </div>
  );
};

export default ShoppingCartItemList;
