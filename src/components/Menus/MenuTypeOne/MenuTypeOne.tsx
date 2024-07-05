'use client';

// import { ShoppingCartAtom } from '../../state/ShoppingCartState';

import classNames from 'classnames';
import Link from 'next/link';

import { base } from '../../../../css/base';
import Button from '../../Button/Button';
import { IMenu } from '../Menu/types';

import useStyles from './css';

const MenuTypeOne = ({ styleClass, theme, gallery }: IMenu) => {
  const { classes } = useStyles({ theme });

  return (
    <menu className={classNames(classes.menu, styleClass)}>
      <div className={classes.menuLinkWrapper}>
        <Link className={classes.menuLink} href="/">
          Home
        </Link>
      </div>
      {gallery && gallery.length > 0 && (
        <div className={classes.menuLinkWrapper}>
          <Link className={classes.menuLink} href="/gallery">
            Gallery
          </Link>
        </div>
      )}

      <div>
        <Link className={classes.menuLink} href="/order">
          <Button
            style={{
              padding: base(1),
              paddingLeft: base(2),
              paddingRight: base(2),
              fontSize: '16px',
            }}
            theme={theme}
          >
            Order Online
          </Button>
        </Link>
      </div>
    </menu>
  );
};

export default MenuTypeOne;
