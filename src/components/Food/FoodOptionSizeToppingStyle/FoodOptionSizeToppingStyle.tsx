import SvgIcons from '../../SvgIcons';
import { IFoodOptionSizeStyle } from '../FoodOptionSize/types';

import useStyles from './css';

const FoodOptionSizeToppingStyle = ({
  optionSize,
  option,
  isChecked,
  onChange,
}: IFoodOptionSizeStyle) => {
  const classes = useStyles();
  return (
    <div
      className={`${classes.foodOptionToppingStyleSize} ${
        isChecked ? classes.foodOptionToppingStyleSizeActive : ''
      }`}
    >
      <label
        className={classes.foodOptionToppingStyleSizeLabel}
        htmlFor={optionSize?.id || ''}
      >
        {optionSize?.name === 'Left Half' ? (
          <div className={classes.foodOptionToppingStyleSizeIcon}>
            <SvgIcons name="halfPizza" />
            <span
              className={
                isChecked ? classes.foodOptionToppingStyleSizePrice : ''
              }
            >
              ${optionSize?.price?.toFixed(2)}
            </span>
          </div>
        ) : optionSize?.name === 'Whole' ? (
          <div
            className={`${classes.foodOptionToppingStyleSizeIcon} ${classes.foodOptionToppingStyleSizeIconMiddle}`}
          >
            <SvgIcons name="wholePizza" />
            <span
              className={
                isChecked ? classes.foodOptionToppingStyleSizePrice : ''
              }
            >
              ${optionSize?.price?.toFixed(2)}
            </span>
          </div>
        ) : (
          <div
            className={`${classes.foodOptionToppingStyleSizeIcon} ${classes.foodOptionToppingStyleSizeIconLast}`}
          >
            <SvgIcons name="halfPizza" />
            <span
              className={
                isChecked ? classes.foodOptionToppingStyleSizePrice : ''
              }
            >
              ${optionSize?.price?.toFixed(2)}
            </span>
          </div>
        )}

        <input
          type="checkbox"
          name={`optionSize-${option?.name}`}
          value={optionSize?.id || undefined}
          id={optionSize?.id || ''}
          checked={isChecked}
          onChange={onChange}
          className={classes.foodOptionToppingStyleSizeInput}
        />
      </label>
    </div>
  );
};

export default FoodOptionSizeToppingStyle;
