// import { ShoppingCartAtom } from '../../state/ShoppingCartState';

import classNames from 'classnames';
import Link from 'next/link';

import useStyles from './css';
import { IMenu } from './types';

const Menu = ({ styleClass }: IMenu) => {
  const classes = useStyles();

  return (
    <menu className={classNames(classes.menu, styleClass)}>
      <div>
        <Link href="/">
          <a className={classes.menuLink}>Home</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a className={classes.menuLink}>Order Online</a>
        </Link>
      </div>
    </menu>
  );
};

export default Menu;
