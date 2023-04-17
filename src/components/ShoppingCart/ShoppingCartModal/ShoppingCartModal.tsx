import { useEffect } from 'react';

import { useDragControls } from 'framer-motion';
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
  const controls = useDragControls();

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
    <ModalPopUp showModal={showShoppingCart} setShowModal={setShowShoppingCart}>
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
