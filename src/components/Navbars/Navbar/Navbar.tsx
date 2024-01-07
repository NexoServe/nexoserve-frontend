import NavbarTypeOne from '../NavbarTypeOne/NavbarTypeOne';
import NavbarTypeTwo from '../NavbarTypeTwo/NavbarTypeTwo';

import { INavbar } from './types';

const Navbar = ({ logo, restaurantName, theme, type }: INavbar) => {
  return (
    <>
      {type === 'one' ? (
        <NavbarTypeOne
          logo={logo}
          theme={theme}
          restaurantName={restaurantName}
          type={type}
        />
      ) : type === 'two' ? (
        <NavbarTypeTwo
          logo={logo}
          theme={theme}
          restaurantName={restaurantName}
          type={type}
        />
      ) : null}
    </>
  );
};

export default Navbar;
