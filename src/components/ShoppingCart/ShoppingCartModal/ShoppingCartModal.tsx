import { useEffect, useMemo } from 'react';

import { useRecoilState } from 'recoil';

import breakpoints from '../../../../css/breakpoints';
import { ShowShoppingCartAtom } from '../../../state/ShoppingCartState';
import Draggable from '../../Draggable/Draggable';
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

  useMemo(() => {
    if (showShoppingCart) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showShoppingCart]);

  return (
    <ModalPopUp
      showModal={showShoppingCart}
      onClose={() => setShowShoppingCart(false)}
    >
      <Draggable
        onDragDown={() => setShowShoppingCart(false)}
        styleClass={classes.shoppingCartModal}
      >
        <ShoppingCart />
      </Draggable>
    </ModalPopUp>
  );
};

export default ShoppingCartModal;
