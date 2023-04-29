import { motion } from 'framer-motion';

import SvgIcons from '../../SvgIcons';

import useStyles from './css';
import { IFoodModalContentHeader } from './types';

const FoodModalContentHeader = ({
  name,
  isRequired,
  isRequiredAddOn,
}: IFoodModalContentHeader) => {
  const classes = useStyles();

  return (
    <div className={classes.foodModalContentHeader}>
      <h3>{name}</h3>
      <motion.span
        animate={isRequiredAddOn ? { scale: [1, 1.15, 1] } : {}}
        transition={{ duration: 0.3 }}
        style={
          isRequiredAddOn
            ? {
                border: '1px solid red',
                padding: '0.2rem 0.5rem',
                borderRadius: '0.5rem',
                color: 'red',
              }
            : {}
        }
      >
        {isRequiredAddOn ? (
          <SvgIcons width="15" height="15" name="warning" />
        ) : null}
        {isRequired ? 'Required' : 'Optional'}
      </motion.span>
    </div>
  );
};

export default FoodModalContentHeader;
