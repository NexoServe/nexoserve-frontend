import { useEffect, useMemo } from 'react';

import { useRecoilState } from 'recoil';

import { FoodModalSelectedOptionsAtom } from '../../../state/FoodModalState';
import FoodOptionRegularStyle from '../FoodOptionRegularStyle/FoodOptionRegularStyle';
import FoodOptionToppingStyle from '../FoodOptionToppingStyle/FoodOptionToppingStyle';

import { IFoodOption } from './types';

const FoodOption = ({ option, addOn }: IFoodOption) => {
  const [selectedOptions, setSelectedOptions] = useRecoilState(
    FoodModalSelectedOptionsAtom,
  );

  useEffect(() => {
    if (selectedOptions === undefined) {
      setSelectedOptions([]);
    }
  }, [selectedOptions, setSelectedOptions]);

  const isChecked = useMemo(() => {
    if (
      selectedOptions &&
      selectedOptions.find(
        (selectedOption) => selectedOption?.name === option?.name,
      )
    ) {
      return true;
    } else {
      return false;
    }
  }, [selectedOptions, option]);

  const selectOption = () => {
    if (
      selectedOptions.find(
        (selectedOption) => selectedOption?.name === option?.name,
      )
    ) {
      const arr = selectedOptions.filter(
        (selectOption) => selectOption?.name !== option?.name,
      );
      setSelectedOptions(arr);
    } else {
      setSelectedOptions([
        ...selectedOptions,
        {
          id: option?.id,
          name: option?.name,
          price: option?.price,
          addOnName: addOn?.name as string,
          optionSize: option?.optionSizes?.find(
            (optionSize) => optionSize?.default === true,
          ),
        },
      ]);
    }
  };

  return (
    <>
      {addOn?.name === 'Toppings' ? (
        <FoodOptionToppingStyle
          isChecked={isChecked}
          onChange={() => selectOption()}
          option={option}
          addOn={addOn}
        />
      ) : (
        <FoodOptionRegularStyle
          isChecked={isChecked}
          onChange={() => selectOption()}
          option={option}
          addOn={addOn}
        />
      )}
    </>
  );
};

export default FoodOption;
