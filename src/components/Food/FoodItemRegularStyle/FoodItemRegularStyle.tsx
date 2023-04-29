import Checkbox from '../../Checkbox/Checkbox';
import FoodItemSize from '../FoodItemSize/FoodItemSize';

import useStyles from './css';
import { IFoodItemToppingStyle } from './types';

const FoodItemRegularStyle = ({
  item,
  onChange,
  isChecked,
  register,
  addOn,
}: IFoodItemToppingStyle) => {
  const classes = useStyles();

  return (
    <div className={`${classes.foodItemRegularStyle}`}>
      <label
        className={`${classes.foodItemToppingStyleLabel} ${
          isChecked ? classes.foodItemToppingStyleLabelActive : ''
        }`}
        htmlFor={item?.id || undefined}
      >
        <Checkbox isChecked={isChecked} />
        <input
          {...(register('foodItems'), { required: false, value: 'ERROR' })}
          type="checkbox"
          value={item?.id || undefined}
          id={item?.id || undefined}
          checked={isChecked}
          onChange={onChange}
          className={classes.foodItemToppingStyleInput}
        />
        <p>{item?.name}</p>
        <div>{item?.price !== 0 ? `$${item?.price}` : '-'}</div>
      </label>

      <div className={classes.foodItemToppingStyleSizes}>
        {item?.itemSizes?.map((itemSize) => (
          <FoodItemSize
            addOn={addOn}
            item={item}
            key={itemSize?.id}
            itemSize={itemSize}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodItemRegularStyle;
