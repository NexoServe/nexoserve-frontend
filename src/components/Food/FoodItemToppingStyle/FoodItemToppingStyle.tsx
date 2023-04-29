import Checkbox from '../../Checkbox/Checkbox';
import Divider from '../../Divider/Divider';
import FoodItemSize from '../FoodItemSize/FoodItemSize';

import useStyles from './css';
import { IFoodItemToppingStyle } from './types';

const FoodItemToppingStyle = ({
  item,
  onChange,
  isChecked,
  register,
}: IFoodItemToppingStyle) => {
  const classes = useStyles();

  return (
    <>
      <Divider styleClass={classes.foodItemToppingStyleDivider} />
      <div className={`${classes.foodItemToppingStyle}`}>
        <label
          className={`${classes.foodItemToppingStyleLabel} ${
            isChecked ? classes.foodItemToppingStyleLabelActive : ''
          }`}
          htmlFor={item?.id || undefined}
        >
          <Checkbox isChecked={isChecked} />
          <input
            {...(register('foodItems'), { required: true })}
            type="checkbox"
            value={item?.id || undefined}
            id={item?.id || undefined}
            checked={isChecked}
            onChange={onChange}
            className={classes.foodItemToppingStyleInput}
          />
          <p>{item?.name}</p>
        </label>

        <div className={classes.foodItemToppingStyleSizes}>
          {item?.itemSizes?.map((itemSize) => (
            <FoodItemSize item={item} key={itemSize?.id} itemSize={itemSize} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FoodItemToppingStyle;
