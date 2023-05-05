// import { ShoppingCartAtom } from '../../state/ShoppingCartState';

import useStyles from './css';

const Navbar = () => {
  const styles = useStyles();

  // const shoppingCart = useRecoilValue(ShoppingCartAtom);

  return (
    <nav className={styles.navbar}>
      <h1>Navbar</h1>
      <div className={styles.navbarCounter}>0</div>
    </nav>
  );
};

export default Navbar;
