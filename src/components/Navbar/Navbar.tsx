import { useRecoilValue } from 'recoil';

import { ShoppingCartAtom } from '../../state/ShoppingCartState';

import useStyles from './css';

const Navbar = () => {
  const styles = useStyles();

  const shoppingCart = useRecoilValue(ShoppingCartAtom);

  return (
    <nav className={styles.navbar}>
      <h1>Navbar</h1>
      <div className={styles.navbarCounter}>{shoppingCart.length}</div>
    </nav>
  );
};

export default Navbar;
