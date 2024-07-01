// import { ShoppingCartAtom } from '../../state/ShoppingCartState';

import { useEffect, useState } from 'react';

import Hamburger from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import breakpoints from '../../../../css/breakpoints';
import Container from '../../Container/Container';
import Divider from '../../Divider/Divider';
import Menu from '../../Menus/Menu/Menu';
import { ModalPopUp } from '../../Modal/Modal';
import { INavbar } from '../Navbar/types';

import useStyles from './css';

const NavbarTypeTwo = ({ logo, restaurantName, theme, gallery }: INavbar) => {
  const classes = useStyles({
    theme,
  });
  const [showMenu, setShowMenu] = useState(false);

  // const shoppingCart = useRecoilValue(ShoppingCartAtom);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= breakpoints.l) {
        setShowMenu(false);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setShowMenu]);

  const router = useRouter();

  return (
    <nav className={classes.navbar}>
      <Container styleClass={classes.navbarContainer}>
        <Link href="/" className={classes.navbarLogo}>
          <Image
            src={logo}
            alt={restaurantName}
            width={100}
            height={40}
            style={{
              height: '100%',
              width: 'auto',
            }}
          />
        </Link>

        <div className={classes.navbarHamburger}>
          <Hamburger
            direction="right"
            color={
              showMenu
                ? theme.primary
                : router.pathname === '/'
                ? theme.neutral
                : theme.primary
            }
            size={22}
            rounded
            label="hey"
            distance="md"
            onToggle={() => setShowMenu(!showMenu)}
            toggled={showMenu}
          />
        </div>

        <Menu
          styleClass={classes.navbarMenuDesktop}
          theme={theme}
          type="two"
          showMenu={showMenu}
          gallery={gallery}
        />

        <ModalPopUp
          showModal={showMenu}
          onClose={() => setShowMenu(false)}
          overlayClass={classes.navbarModalOverlay}
          theme={theme}
        >
          <Menu
            styleClass={classes.navbarMenuMobile}
            theme={theme}
            type="two"
            showMenu={showMenu}
            gallery={gallery}
          />
        </ModalPopUp>
      </Container>
      <Divider theme={theme} />
    </nav>
  );
};

export default NavbarTypeTwo;
