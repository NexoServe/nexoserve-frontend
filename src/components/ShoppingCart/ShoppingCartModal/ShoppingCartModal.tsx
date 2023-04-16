import { useEffect } from 'react';

import { motion, useDragControls } from 'framer-motion';
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
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragControls={controls}
        onDragEnd={(_, info) => {
          if (info.offset.y > 150) {
            setShowShoppingCart(false);
          }
        }}
        initial={{ y: '100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: '100%', opacity: 0 }}
        transition={{ stiffness: 100 }}
        className={classes.shoppingCartModal}
      >
        <ShoppingCart />
      </motion.div>
    </ModalPopUp>
  );
};

export default ShoppingCartModal;
