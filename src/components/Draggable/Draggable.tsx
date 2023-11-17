import { motion } from 'framer-motion';

import { IDraggable } from './types';

const Draggable = ({ onDragDown, children, styleClass }: IDraggable) => {
  // const [isDragging, setIsDragging] = useState(false);

  // const handleDragStart = () => {
  //   setIsDragging(true);
  //   // Additional logic to handle drag start
  // };

  // const handleDragEnd = (_: any, info: any) => {
  //   setIsDragging(false);
  //   if (info.offset.y > 150) {
  //     onDragDown();
  //   }
  //   // Additional logic to handle drag end
  // };

  return (
    <motion.div
      // drag="y"
      // dragConstraints={{ top: 0, bottom: 0 }}
      // onDragStart={handleDragStart}
      // onDragEnd={handleDragEnd}
      // dragMomentum={false}
      // dragElastic={0.5}
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
