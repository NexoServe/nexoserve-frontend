import { useEffect } from 'react';

import { useRecoilState } from 'recoil';

import breakpoints from '../../../../css/breakpoints';
import { ShowShoppingCartAtom } from '../../../state/ShoppingCartState';
import { ModalPopUp } from '../../Modal/Modal';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

import useStyles from './css';

const ShoppingCartModal = () => {
  const [showShoppingCart, setShowShoppingCart] =
    useRecoilState(ShowShoppingCartAtom);
  const classes = useStyles();

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > breakpoints.l) {
        setShowShoppingCart(false);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setShowShoppingCart]);

  return (
    <ModalPopUp
      showModal={showShoppingCart}
      onClose={() => setShowShoppingCart(false)}
    >
      <div className={classes.shoppingCartModal}>
        <ShoppingCart />
      </div>
    </ModalPopUp>
  );
};

export default ShoppingCartModal;
