import { useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';

import {
  FoodModalAtom,
  FoodModalSelectedOptionsAtom,
} from '../../../state/FoodModalState';
import RadioButton from '../../RadioButton/RadioButton';

import useStyles from './css';
import { IFoodSize } from './types';

const FoodSize = ({ size, theme }: IFoodSize) => {
  const classes = useStyles({
    theme,
  });
  const [isChecked, setIsChecked] = useState(false);

  const [foodModal, setFoodModal] = useRecoilState(FoodModalAtom);
  const [selectedOptions, setSelectedOptions] = useRecoilState(
    FoodModalSelectedOptionsAtom,
  );

  useEffect(() => {
    if (size?.id === foodModal.selectedSize?.id) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [size, foodModal]);

  const onSizeSelect = () => {
    if (size?.addOns && size?.addOns?.length > 0) {
      const arr = selectedOptions.map((selectedOption) => {
        const addOn = size?.addOns?.find(
          (addOn) => addOn?.name === selectedOption?.addOnName,
        );

        const correctOption = addOn?.options?.find(
          (optionSize) => optionSize?.name === selectedOption?.name,
        );

        const correctOptionSize = correctOption?.optionSizes?.find(
          (optionSize) => optionSize?.name === selectedOption?.optionSize?.name,
        );

        return {
          ...selectedOption,
          id: correctOption?.id ? correctOption?.id : selectedOption?.id,
          optionSize: correctOptionSize
            ? correctOptionSize
            : selectedOption?.optionSize,
        };
      });

      setSelectedOptions(arr);
    }

    setFoodModal({ ...foodModal, selectedSize: size });
  };

  return (
    <label
      className={`${classes.foodSize} ${
        isChecked ? classes.foodSizeActive : ''
      }`}
      htmlFor={size?.id || ''}
    >
      <div className={classes.foodSizeInner}>
        <RadioButton isChecked={isChecked} theme={theme} />
        <input
          style={{
            opacity: 0,
            position: 'absolute',
            width: 0,
            height: 0,
            overflow: 'hidden',
          }}
          type="radio"
          name="foodSize"
          id={size?.id || ''}
          value={size?.id || undefined}
          checked={isChecked}
          onChange={onSizeSelect}
        />
        <h4 className={classes.foodSizeName}>{size?.name}</h4>
      </div>
      <p className={classes.foodSizePrice}>${size?.price?.toFixed(2)}</p>
    </label>
  );
};

export default FoodSize;
