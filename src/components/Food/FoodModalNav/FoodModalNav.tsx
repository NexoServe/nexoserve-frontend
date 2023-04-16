import { useEffect, useState } from 'react';

import classNames from 'classnames';

import SvgIcons from '../../SvgIcons';

import useStyles from './css';
import { IFoodModalNav } from './types';

const FoodModalNav = ({ name, onClose }: IFoodModalNav) => {
  const [scrolled, setScrolled] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    const container = document.querySelector('#foodModal');
    const tracked = document.querySelector('#foodModalName');

    const handleScroll = () => {
      if (tracked?.offsetTop - 40 <= container?.scrollTop) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    container?.addEventListener('scroll', handleScroll);

    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log('scrolled', scrolled);

  return (
    <div
      className={classNames(
        classes.foodModalNav,
        scrolled ? classes.foodModalNavActive : null,
      )}
    >
      <h1>{name}</h1>
      <button onClick={onClose}>
        <SvgIcons width="40px" height="40px" name="closeFilledWhite" />
      </button>
    </div>
  );
};

export default FoodModalNav;
