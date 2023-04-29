import Checkbox from '../../Checkbox/Checkbox';
import { IFoodItemStyle } from '../FoodItem/types';
import FoodItemSize from '../FoodItemSize/FoodItemSize';

import useStyles from './css';

const FoodItemRegularStyle = ({
  item,
  onChange,
  isChecked,
  addOn,
}: IFoodItemStyle) => {
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
