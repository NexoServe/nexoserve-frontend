import { motion } from 'framer-motion';

import colors from '../../../../css/colors';
import SvgIcons from '../../SvgIcons';

import useStyles from './css';
import { IFoodModalContentHeader } from './types';

const FoodModalContentHeader = ({
  name,
  isRequired,
  isRequiredAddOn,
  maxOptionsSelected,
}: IFoodModalContentHeader) => {
  const classes = useStyles();

  return (
    <div className={classes.foodModalContentHeader}>
      <h3>{name}</h3>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
        }}
      >
        <motion.span
          animate={isRequiredAddOn ? { scale: [1, 1.15, 1] } : {}}
          transition={{ duration: 0.3 }}
          style={
            isRequiredAddOn
              ? {
                  border: `1px solid ${colors.red}`,
                  padding: '0.2rem 0.5rem',
                  borderRadius: '0.5rem',
                  color: colors.red,
                }
              : {}
          }
        >
          {isRequiredAddOn ? (
            <SvgIcons width="15" height="15" name="warning" />
          ) : null}
          {isRequired ? 'Required' : 'Optional'}
        </motion.span>

        {maxOptionsSelected && (
          <div
            style={{
              fontSize: '12px',
            }}
          >
            {maxOptionsSelected === 1
              ? '*Only select one'
              : `*Select up to ${maxOptionsSelected} options`}
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodModalContentHeader;
