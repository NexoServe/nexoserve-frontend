import { motion } from 'framer-motion';

import SvgIcons from '../../SvgIcons';

import useStyles from './css';
import { IFoodModalContentHeader } from './types';

const FoodModalContentHeader = ({
  name,
  isRequired,
  isRequiredAddOn,
  maxOptionsSelected,
  theme,
}: IFoodModalContentHeader) => {
  const classes = useStyles({
    theme,
  });

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
                  border: `1px solid ${theme.tertiary}`,
                  padding: '0.2rem 0.5rem',
                  borderRadius: '0.5rem',
                  color: theme.tertiary,
                }
              : {
                  color: theme.primary,
                }
          }
        >
          {isRequiredAddOn ? (
            <SvgIcons
              width="15"
              height="15"
              name="warning"
              fill={theme.tertiary}
              backgroundColor={theme.neutral}
            />
          ) : null}
          {isRequired ? 'Required' : 'Optional'}
        </motion.span>

        {maxOptionsSelected && (
          <div
            style={{
              fontSize: '12px',
              textAlign: 'right',
              lineHeight: '14px',
              color: theme.primary,
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
