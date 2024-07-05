'use client';

import { useEffect, useState } from 'react';

import NavbarTypeOne from '../NavbarTypeOne/NavbarTypeOne';
import NavbarTypeTwo from '../NavbarTypeTwo/NavbarTypeTwo';

import { INavbar } from './types';

const Navbar = ({ logo, restaurantName, theme, type, gallery }: INavbar) => {
  const [themeOne, setThemeOne] = useState(theme);

  useEffect(() => {
    setThemeOne(theme);
  }, [theme]);

  return (
    <>
      {type === 'one' ? (
        <NavbarTypeOne
          logo={logo}
          theme={themeOne}
          restaurantName={restaurantName}
          type={type}
          gallery={gallery}
        />
      ) : type === 'two' ? (
        <NavbarTypeTwo
          logo={logo}
          theme={themeOne}
          restaurantName={restaurantName}
          type={type}
          gallery={gallery}
        />
      ) : null}
    </>
  );
};

export default Navbar;
