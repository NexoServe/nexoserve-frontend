import { useState } from 'react';

import { motion } from 'framer-motion';

import { base } from '../../../../css/base';
import RoundBorder from '../../RoundBorder/RoundBorder';
import SvgIcons from '../../SvgIcons';

import useStyles from './css';

const variants = {
  pickUp: { x: 0 },
  delivery: { x: '100%' },
};

const OrderType = () => {
  const classes = useStyles();
  const [isPickUp, setIsPickUp] = useState(true);

  return (
    <>
      <RoundBorder styleClass={classes.orderType}>
        <div className={classes.orderTypeToggle}>
          <motion.div
            className={classes.orderTypeSlider}
            animate={isPickUp ? 'pickUp' : 'delivery'}
            transition={{ duration: 0.025, ease: 'easeInOut' }}
            variants={variants}
          />
          <button
            onClick={() => setIsPickUp(true)}
            className={classes.orderTypeToggleButton}
          >
            <SvgIcons
              styleClass={`${classes.orderTypeIcon} ${classes.orderTypeIconPickUp}`}
              name="pickUp"
              width={base(2.5)}
            />
            Pick Up
          </button>
          <button
            onClick={() => setIsPickUp(false)}
            className={classes.orderTypeToggleButton}
          >
            Delivery
            <SvgIcons
              styleClass={`${classes.orderTypeIcon} ${classes.orderTypeIconDelivery}`}
              name="delivery"
            />
          </button>
        </div>
      </RoundBorder>
    </>
  );
};

export default OrderType;
