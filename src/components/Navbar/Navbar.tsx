// import { ShoppingCartAtom } from '../../state/ShoppingCartState';

import { useEffect, useState } from 'react';

import { AnimatePresence } from 'framer-motion';
import Hamburger, { Divide } from 'hamburger-react';

import breakpoints from '../../../css/breakpoints';
import colors from '../../../css/colors';
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
        <div className={classes.navbarLogo}>Logo</div>
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
