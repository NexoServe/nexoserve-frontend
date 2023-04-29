import SvgIcons from '../../SvgIcons';

import useStyles from './css';
import { IFoodItemSize } from './types';

const FoodItemSizeToppingStyle = ({
  itemSize,
  item,
  isChecked,
  register,
  onChange,
}: IFoodItemSize) => {
  const classes = useStyles();
  return (
    <div
      className={`${classes.foodItemToppingStyleSize} ${
        isChecked ? classes.foodItemToppingStyleSizeActive : ''
      }`}
    >
      <label
        className={classes.foodItemToppingStyleSizeLabel}
        htmlFor={itemSize?.id || ''}
      >
        {itemSize?.name === 'Left Half' ? (
          <div className={classes.foodItemToppingStyleSizeIcon}>
            <SvgIcons name="halfPizza" />
            <span
              className={isChecked ? classes.foodItemToppingStyleSizePrice : ''}
            >
              ${itemSize?.price?.toFixed(2)}
            </span>
          </div>
        ) : itemSize?.name === 'Whole' ? (
          <div
            className={`${classes.foodItemToppingStyleSizeIcon} ${classes.foodItemToppingStyleSizeIconMiddle}`}
          >
            <SvgIcons name="wholePizza" />
            <span
              className={isChecked ? classes.foodItemToppingStyleSizePrice : ''}
            >
              ${itemSize?.price?.toFixed(2)}
            </span>
          </div>
        ) : (
          <div
            className={`${classes.foodItemToppingStyleSizeIcon} ${classes.foodItemToppingStyleSizeIconLast}`}
          >
            <SvgIcons name="halfPizza" />
            <span
              className={isChecked ? classes.foodItemToppingStyleSizePrice : ''}
            >
              ${itemSize?.price?.toFixed(2)}
            </span>
          </div>
        )}

        <input
          {...register('foodItemSize')}
          type="checkbox"
          name={`itemSize-${item?.name}`}
          value={itemSize?.id || undefined}
          id={itemSize?.id || ''}
          checked={isChecked}
          onChange={onChange}
          className={classes.foodItemToppingStyleSizeInput}
        />
      </label>
    </div>
  );
};

export default FoodItemSizeToppingStyle;
