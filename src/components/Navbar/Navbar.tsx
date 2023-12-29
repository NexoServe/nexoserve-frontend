// import { ShoppingCartAtom } from '../../state/ShoppingCartState';

import { useEffect, useState } from 'react';

import Hamburger from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';

import breakpoints from '../../../css/breakpoints';
import Container from '../Container/Container';
import Divider from '../Divider/Divider';
import Menu from '../Menu/Menu';
import { ModalPopUp } from '../Modal/Modal';

import useStyles from './css';
import { INavbar } from './types';

const Navbar = ({ logo, restaurantName, theme }: INavbar) => {
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
            color={theme.primary}
            size={22}
            rounded
            label="hey"
            distance="md"
            onToggle={() => setShowMenu(!showMenu)}
            toggled={showMenu}
          />
        </div>

        <Menu styleClass={classes.navbarMenuDesktop} theme={theme} />

        <ModalPopUp
          showModal={showMenu}
          onClose={() => setShowMenu(false)}
          overlayClass={classes.navbarModalOverlay}
        >
          <Menu styleClass={classes.navbarMenuMobile} theme={theme} />
        </ModalPopUp>
      </Container>
      <Divider />
    </nav>
  );
};

export default Navbar;
