import { motion } from 'framer-motion';

import { IDraggable } from './types';

const Draggable = ({ onDragDown, children, styleClass }: IDraggable) => {
  return (
    <motion.div
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      onDragEnd={(_, info) => {
        if (info.offset.y > 150) {
          onDragDown();
        }
      }}
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ stiffness: 100 }}
      className={styleClass}
    >
      {children}
    </motion.div>
  );
};

export default Draggable;
