import { useEffect } from 'react';

import { useRecoilState } from 'recoil';

import breakpoints from '../../../../css/breakpoints';
import { ShowShoppingCartAtom } from '../../../state/ShoppingCartState';
import { ModalPopUp } from '../../Modal/Modal';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

import useStyles from './css';
import { IShoppingCartModal } from './types';

const ShoppingCartModal = ({ theme }: IShoppingCartModal) => {
  const [showShoppingCart, setShowShoppingCart] =
    useRecoilState(ShowShoppingCartAtom);
  const classes = useStyles({
    theme,
  });

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
      theme={theme}
    >
      <div className={classes.shoppingCartModal}>
        <ShoppingCart theme={theme} />
      </div>
    </ModalPopUp>
  );
};

export default ShoppingCartModal;
