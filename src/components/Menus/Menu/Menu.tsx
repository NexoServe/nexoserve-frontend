import MenuTypeOne from '../MenuTypeOne/MenuTypeOne';
import MenuTypeTwo from '../MenuTypeTwo/MenuTypeTwo';

import { IMenu } from './types';

const Menu = ({ theme, type, styleClass, showMenu, gallery }: IMenu) => {
  return (
    <>
      {type === 'one' ? (
        <MenuTypeOne
          theme={theme}
          type={type}
          styleClass={styleClass}
          showMenu={showMenu}
          gallery={gallery}
        />
      ) : type === 'two' ? (
        <MenuTypeTwo
          theme={theme}
          type={type}
          styleClass={styleClass}
          showMenu={showMenu}
          gallery={gallery}
        />
      ) : null}
    </>
  );
};

export default Menu;
