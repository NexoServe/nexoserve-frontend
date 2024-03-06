import MenuTypeOne from '../MenuTypeOne/MenuTypeOne';
import MenuTypeTwo from '../MenuTypeTwo/MenuTypeTwo';

import { IMenu } from './types';

const Menu = ({ theme, type, styleClass, showMenu }: IMenu) => {
  return (
    <>
      {type === 'one' ? (
        <MenuTypeOne
          theme={theme}
          type={type}
          styleClass={styleClass}
          showMenu={showMenu}
        />
      ) : type === 'two' ? (
        <MenuTypeTwo
          theme={theme}
          type={type}
          styleClass={styleClass}
          showMenu={showMenu}
        />
      ) : null}
    </>
  );
};

export default Menu;
