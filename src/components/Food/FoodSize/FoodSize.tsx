import { useEffect, useState } from 'react';

import { useFormContext } from 'react-hook-form';
import { useRecoilState } from 'recoil';

import { FoodModalSelectedSizeAtom } from '../../../state/FoodModalState';
import RadioButton from '../../RadioButton/RadioButton';
import { FoodFormType } from '../FoodModal/types';

import useStyles from './css';
import { IFoodSize } from './types';

const FoodSize = ({ size }: IFoodSize) => {
  const classes = useStyles();
  const [isChecked, setIsChecked] = useState(false);

  const [selectedSize, setSelectedSize] = useRecoilState(
    FoodModalSelectedSizeAtom,
  );

  useEffect(() => {
    if (size?.id === selectedSize?.id) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [size, selectedSize]);

  const { register } = useFormContext<FoodFormType>();

  return (
    <label
      className={`${classes.foodSize} ${
        isChecked ? classes.foodSizeActive : ''
      }`}
      htmlFor={size?.id || ''}
    >
      <div className={classes.foodSizeInner}>
        <RadioButton isChecked={isChecked} />
        <input
          style={{
            opacity: 0,
            position: 'absolute',
            width: 0,
            height: 0,
            overflow: 'hidden',
          }}
          {...register('foodSize', {
            required: true,
          })}
          type="radio"
          name="foodSize"
          id={size?.id || ''}
          value={size?.id || undefined}
          checked={isChecked}
          onChange={() => setSelectedSize(size)}
        />
        <h4 className={classes.foodSizeName}>{size?.name}</h4>
      </div>
      <p className={classes.foodSizePrice}>${size?.price}</p>
    </label>
  );
};

export default FoodSize;
