import { motion, useDragControls } from 'framer-motion';
import { useRecoilState } from 'recoil';

import { ShowShoppingCartAtom } from '../../../state/ShoppingCartState';
import { Modal } from '../../Modal/Modal';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

import useStyles from './css';

const ShoppingCartModal = () => {
  const [showShoppingCart, setShowShoppingCart] =
    useRecoilState(ShowShoppingCartAtom);
  const styles = useStyles();
  const controls = useDragControls();

  return (
    <Modal showModal={showShoppingCart} setShowModal={setShowShoppingCart}>
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
        className={styles.shoppingCartModal}
      >
        <ShoppingCart />
      </motion.div>
    </Modal>
  );
};

export default ShoppingCartModal;
