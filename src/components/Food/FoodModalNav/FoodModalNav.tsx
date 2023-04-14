import { useEffect, useState } from 'react';

import classNames from 'classnames';

import SvgIcons from '../../SvgIcons';

import useStyles from './css';
import { IFoodModalNav } from './types';

const FoodModalNav = ({ name }: IFoodModalNav) => {
  const [scrolled, setScrolled] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    const handleScroll = (event: any) => {
      const target = event.target;
      const scrollTop = target.scrollTop;

      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const container = document.querySelector('#foodModal');
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
      <SvgIcons width="40px" height="40px" name="closeFilledWhite" />
    </div>
  );
};

export default FoodModalNav;
