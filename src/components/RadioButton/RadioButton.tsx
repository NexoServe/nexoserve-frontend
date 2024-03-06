import { AnimatePresence, motion } from 'framer-motion';

import { IRadioButton } from './types';

const RadioButton = ({ isChecked, theme }: IRadioButton) => {
  return (
    <div>
      <svg width={25} height={25} viewBox="0 0 100 100">
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          stroke={theme.primary}
          strokeWidth="5"
          fill="none"
        />
        <AnimatePresence>
          {isChecked && (
            <>
              <motion.circle
                cx="50"
                cy="50"
                r="24"
                fill={theme.primary}
                stroke={theme.primary}
                strokeWidth="1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: isChecked ? 0 : 1 }}
                animate={{
                  opacity: isChecked ? 1 : 0,
                  transition: { delay: 0.3 },
                }}
                exit={{ opacity: isChecked ? 0 : 1, transition: {} }}
                transition={{ duration: 0.3 }}
              />
              <motion.path
                d="M 30,50 a 20,20 0 1,0 40,0 a 20,20 0 1,0 -40,0"
                stroke={theme.primary}
                strokeWidth="4"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isChecked ? 1 : 0 }}
                exit={{ pathLength: 0, transition: { delay: 0.2 } }}
                transition={{ duration: 0.3 }}
              />
            </>
          )}
        </AnimatePresence>
      </svg>
    </div>
  );
};

export default RadioButton;
