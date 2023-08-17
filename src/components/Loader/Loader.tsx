import { motion } from 'framer-motion';

import useStyles from './css';
import { ILoader } from './types';

const Loader = ({ styleClass, scale = 1, width, height }: ILoader) => {
  const classes = useStyles();

  return (
    <div className={styleClass}>
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          delayChildren: 0.5,
          staggerChildren: 0.2,
        }}
        className={classes.wrapper}
        style={{
          width: width && width,
          height: height && height,
        }}
      >
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            style={{ scale: `${scale}` }}
            className={classes.slice}
          >
            <div className={classes.tomato}></div>
            <div className={classes.tomato}></div>
            <div className={classes.olive}></div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Loader;
