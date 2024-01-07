// import { ShoppingCartAtom } from '../../state/ShoppingCartState';

import classNames from 'classnames';
import Link from 'next/link';

import { base } from '../../../../css/base';
import Button from '../../Button/Button';
import { IMenu } from '../Menu/types';

import useStyles from './css';

const MenuTypeOne = ({ styleClass, theme }: IMenu) => {
  const styles = useStyles({ theme });

  return (
    <menu className={classNames(styles.menu, styleClass)}>
      <div className={styles.menuLinkWrapper}>
        <Link className={styles.menuLink} href="/">
          Home
        </Link>
      </div>
      <div className={styles.menuLinkWrapper}>
        <Link className={styles.menuLink} href="/gallery">
          Gallery
        </Link>
      </div>
      <div>
        <Link className={styles.menuLink} href="/order">
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
