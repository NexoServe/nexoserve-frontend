import { OptionSizeType } from '../../../../generated/graphql';
import Checkbox from '../../Checkbox/Checkbox';
import Divider from '../../Divider/Divider';
import { IFoodOptionStyle } from '../FoodOption/types';
import FoodOptionSize from '../FoodOptionSize/FoodOptionSize';

import useStyles from './css';

const FoodOptionToppingStyle = ({
  option,
  onChange,
  isChecked,
  addOn,
}: IFoodOptionStyle) => {
  const classes = useStyles();

  return (
    <>
      <Divider styleClass={classes.foodOptionToppingStyleDivider} />
      <div className={`${classes.foodOptionToppingStyle}`}>
        <label
          className={`${classes.foodOptionToppingStyleLabel} ${
            isChecked ? classes.foodOptionToppingStyleLabelActive : ''
          }`}
          htmlFor={option?.id || undefined}
        >
          <Checkbox isChecked={isChecked} />
          <input
            type="checkbox"
            value={option?.id || undefined}
            id={option?.id || undefined}
            checked={isChecked}
            onChange={onChange}
            className={classes.foodOptionToppingStyleInput}
          />
          <p>{option?.name}</p>
        </label>

        <div className={classes.foodOptionToppingStyleSizes}>
          {option?.optionSizes?.map((optionSize) => (
            <FoodOptionSize
              addOn={addOn}
              option={option}
              key={optionSize?.id}
              optionSize={optionSize as OptionSizeType}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FoodOptionToppingStyle;