// import { ShoppingCartAtom } from '../../state/ShoppingCartState';

import { useEffect, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import Hamburger from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';

import { base } from '../../../css/base';
import breakpoints from '../../../css/breakpoints';
import colors from '../../../css/colors';
import Logo from '../../assets/madisons-logo.svg';
import Container from '../Container/Container';
import Divider from '../Divider/Divider';
import Menu from '../Menu/Menu';
import { ModalPopUp } from '../Modal/Modal';

import useStyles from './css';

const Navbar = () => {
  const classes = useStyles();
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
        <Link
          href="/"
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            paddingTop: base(1),
            paddingBottom: base(1),
            cursor: 'pointer',
          }}
        >
          <Image
            className={classes.navbarLogo}
            src={Logo}
            alt="Madisons Logo"
            style={{
              scale: 0.5,
              cursor: 'pointer',
            }}
          />
        </Link>
        <div className={classes.navbarHamburger}>
          <Hamburger
            direction="right"
            color={colors.black}
            size={22}
            rounded
            label="hey"
            distance="md"
            onToggle={() => setShowMenu(!showMenu)}
            toggled={showMenu}
          />
        </div>

        <Menu styleClass={classes.navbarMenuDesktop} />

        <AnimatePresence>
          {showMenu && (
            <ModalPopUp
              showModal={showMenu}
              onClose={() => setShowMenu(false)}
              overlayClass={classes.navbarModalOverlay}
            >
              <Menu styleClass={classes.navbarMenuMobile} />
            </ModalPopUp>
          )}
        </AnimatePresence>
      </Container>
      <Divider />
    </nav>
  );
};

export default Navbar;
