import { OptionSizeType } from '../../../../generated/graphql';
import Checkbox from '../../Checkbox/Checkbox';
import RadioButton from '../../RadioButton/RadioButton';
import { IFoodOptionStyle } from '../FoodOption/types';
import FoodOptionSize from '../FoodOptionSize/FoodOptionSize';

import useStyles from './css';

const FoodOptionRegularStyle = ({
  option,
  onChange,
  isChecked,
  addOn,
  disabled,
  theme,
}: IFoodOptionStyle) => {
  const classes = useStyles({
    theme,
  });

  return (
    <div
      className={`${classes.foodOptionRegularStyle}`}
      style={{
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <label
        className={`${classes.foodOptionToppingStyleLabel} ${
          isChecked ? classes.foodOptionToppingStyleLabelActive : ''
        }`}
        style={{
          cursor: disabled ? 'default' : 'pointer',
        }}
        htmlFor={option?.id || undefined}
      >
        {addOn?.maxOptionsSelected === 1 ? (
          <RadioButton theme={theme} isChecked={isChecked} />
        ) : (
          <Checkbox theme={theme} isChecked={isChecked} />
        )}

        <input
          type={addOn?.maxOptionsSelected === 1 ? 'radio' : 'checkbox'}
          value={option?.id || undefined}
          id={option?.id || undefined}
          checked={isChecked}
          onChange={onChange}
          className={classes.foodOptionToppingStyleInput}
          disabled={disabled}
          style={{
            cursor: disabled ? 'default' : 'pointer',
          }}
        />
        <p>{option?.name}</p>
        {option?.price && (
          <div>
            {option?.price !== 0 ? `$${option?.price?.toFixed(2)}` : '-'}
          </div>
        )}
      </label>

      <div className={classes.foodOptionToppingStyleSizes}>
        {option?.optionSizes?.map((optionSize) => (
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
  );
};

export default FoodOptionRegularStyle;
