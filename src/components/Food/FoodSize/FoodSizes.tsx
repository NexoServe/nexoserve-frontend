import { useEffect, useState } from 'react';

import { useFormContext } from 'react-hook-form';
import { useRecoilState } from 'recoil';

import { FoodModalSelectedSizeAtom } from '../../../state/FoodModalState';
import { FoodFormType } from '../FoodModal/types';

import { IFoodSize } from './types';

const FoodSize = ({ size }: IFoodSize) => {
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
    <div>
      <label
        style={{
          display: 'flex',
        }}
        htmlFor={size?.id || ''}
      >
        <input
          {...register('foodSize')}
          type="radio"
          name="foodSize"
          id={size?.id || ''}
          value={size?.id || undefined}
          checked={isChecked}
          onChange={() => setSelectedSize(size)}
        />
        <h4>{size?.name}</h4>
        <p>${size?.price}</p>
      </label>
    </div>
  );
};

export default FoodSize;
