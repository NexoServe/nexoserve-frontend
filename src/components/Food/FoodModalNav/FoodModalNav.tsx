import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import SvgIcons from '../../SvgIcons';

import useStyles from './css';
import { IFoodModalNav } from './types';

const FoodModalNav = ({ name, onClick, loading }: IFoodModalNav) => {
  const [scrolled, setScrolled] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    const container = document.querySelector<HTMLElement>('#foodModal');
    const tracked = document.querySelector<HTMLElement>('#foodModalName');

    const handleScroll = () => {
      if (tracked?.offsetTop && container?.scrollTop) {
        if (tracked.offsetTop - 40 <= container.scrollTop) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    container?.addEventListener('scroll', handleScroll);

    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, [loading]);

  return (
    <motion.div
      initial={{ y: '-100%', opacity: 0 }}
      animate={{ y: scrolled ? 0 : '-100%', opacity: 1 }}
      transition={{
        duration: 0.3,
        type: 'tween',
      }}
      className={classes.foodModalNav}
    >
      <h1>{name}</h1>
      <button onClick={onClick}>
        <SvgIcons width="40px" height="40px" name="closeFilledWhite" />
      </button>
    </motion.div>
  );
};

export default FoodModalNav;
