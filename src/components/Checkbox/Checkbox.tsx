import { AnimatePresence, motion } from 'framer-motion';

import colors from '../../../css/colors';

import { ICheckbox } from './types';

const Checkbox = ({ isChecked }: ICheckbox) => {
  return (
    <motion.div
      style={{
        border: `2px solid ${colors.black}`,
        minHeight: '20px',
        minWidth: '20px',
        maxWidth: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      initial={{ backgroundColor: 'transparent' }}
      animate={{
        backgroundColor: isChecked ? colors.black : colors.white,
      }}
      exit={{ backgroundColor: 'transparent' }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence>
        {isChecked && (
          <motion.svg
            width="20"
            height="14"
            viewBox="0 0 25 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{
                pathLength: isChecked ? 1 : 0,
              }}
              animate={{
                pathLength: isChecked ? 1 : 0,
                transition: { delay: 0.1 },
              }}
              exit={{ pathLength: 0 }}
              d="M3.5 9.5L8 14L21 1"
              stroke={colors.white}
              strokeWidth="3"
              strokeLinecap="round"
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Checkbox;
