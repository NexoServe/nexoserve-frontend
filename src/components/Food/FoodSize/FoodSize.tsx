import { useEffect, useState } from 'react';

import { useFormContext } from 'react-hook-form';
import { useRecoilState } from 'recoil';

import { FoodModalAtom } from '../../../state/FoodModalState';
import RadioButton from '../../RadioButton/RadioButton';
import { FoodFormType } from '../FoodModal/types';

import useStyles from './css';
import { IFoodSize } from './types';

const FoodSize = ({ size }: IFoodSize) => {
  const classes = useStyles();
  const [isChecked, setIsChecked] = useState(false);

  const [foodModal, setFoodModal] = useRecoilState(FoodModalAtom);

  useEffect(() => {
    if (size?.id === foodModal.selectedSize?.id) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [size, foodModal]);

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
            required: false,
          })}
          type="radio"
          name="foodSize"
          id={size?.id || ''}
          value={size?.id || undefined}
          checked={isChecked}
          onChange={() => setFoodModal({ ...foodModal, selectedSize: size })}
        />
        <h4 className={classes.foodSizeName}>{size?.name}</h4>
      </div>
      <p className={classes.foodSizePrice}>${size?.price}</p>
    </label>
  );
};

export default FoodSize;
