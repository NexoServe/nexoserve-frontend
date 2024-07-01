// import { ShoppingCartAtom } from '../../state/ShoppingCartState';

import classNames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { base } from '../../../../css/base';
import Button from '../../Button/Button';
import { IMenu } from '../Menu/types';

import useStyles from './css';

const MenuTypeTwo = ({ styleClass, theme, showMenu, gallery }: IMenu) => {
  const styles = useStyles({ theme });

  const router = useRouter();

  return (
    <menu
      className={classNames(styles.menu, styleClass)}
      style={{
        background: showMenu
          ? theme.neutral
          : router.pathname === '/'
          ? 'transparent'
          : theme.neutral,
      }}
    >
      <div className={styles.menuLinkWrapper}>
        <Link
          className={styles.menuLink}
          href="/"
          style={{
            color: showMenu
              ? theme.primary
              : router.pathname === '/'
              ? theme.neutral
              : theme.primary,
          }}
        >
          Home
        </Link>
      </div>

      {gallery && gallery.length > 0 && (
        <div className={styles.menuLinkWrapper}>
          <Link
            className={styles.menuLink}
            href="/gallery"
            style={{
              color: showMenu
                ? theme.primary
                : router.pathname === '/'
                ? theme.neutral
                : theme.primary,
            }}
          >
            Gallery
          </Link>
        </div>
      )}

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

export default MenuTypeTwo;
