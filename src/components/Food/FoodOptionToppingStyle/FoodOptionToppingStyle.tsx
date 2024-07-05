import { OptionSizeType } from '../../../../generated/graphql';
import Checkbox from '../../Checkbox/Checkbox';
import Divider from '../../Divider/Divider';
import RadioButton from '../../RadioButton/RadioButton';
import { IFoodOptionStyle } from '../FoodOption/types';
import FoodOptionSize from '../FoodOptionSize/FoodOptionSize';

import useStyles from './css';

const FoodOptionToppingStyle = ({
  option,
  onChange,
  isChecked,
  addOn,
  theme,
}: IFoodOptionStyle) => {
  const classes = useStyles({
    theme,
  });

  return (
    <>
      <Divider
        theme={theme}
        styleClass={classes.foodOptionToppingStyleDivider}
      />
      <div className={`${classes.foodOptionToppingStyle}`}>
        <label
          className={`${classes.foodOptionToppingStyleLabel} ${
            isChecked ? classes.foodOptionToppingStyleLabelActive : ''
          }`}
          htmlFor={option?.id || undefined}
        >
          {addOn?.maxOptionsSelected === 1 ? (
            <RadioButton theme={theme} isChecked={isChecked} />
          ) : (
            <Checkbox theme={theme} isChecked={isChecked} />
          )}
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
          {option?.optionSizes
            ?.slice()
            ?.sort((a, b) => (a?.sort as number) - (b?.sort as number))
            ?.map((optionSize) => (
              <FoodOptionSize
                addOn={addOn}
                option={option}
                key={optionSize?.id}
                optionSize={optionSize as OptionSizeType}
                theme={theme}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default FoodOptionToppingStyle;
