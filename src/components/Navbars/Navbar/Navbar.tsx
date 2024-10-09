'use client';

import NavbarTypeOne from '../NavbarTypeOne/NavbarTypeOne';
import NavbarTypeTwo from '../NavbarTypeTwo/NavbarTypeTwo';

import { INavbar } from './types';

const Navbar = ({ logo, restaurantName, theme, type, gallery }: INavbar) => {
  return (
    <>
      {type === 'one' ? (
        <NavbarTypeOne
          logo={logo}
          theme={theme}
          restaurantName={restaurantName}
          type={type}
          gallery={gallery}
        />
      ) : type === 'two' ? (
        <NavbarTypeTwo
          logo={logo}
          theme={theme}
          restaurantName={restaurantName}
          type={type}
          gallery={gallery}
        />
      ) : null}
    </>
  );
};

export default Navbar;
