import { useEffect, useMemo, useRef } from 'react';

import { useRecoilState } from 'recoil';

import { FoodModalSelectedOptionsAtom } from '../../../state/FoodModalState';
import FoodOptionRegularStyle from '../FoodOptionRegularStyle/FoodOptionRegularStyle';
import FoodOptionToppingStyle from '../FoodOptionToppingStyle/FoodOptionToppingStyle';

import { IFoodOption } from './types';

const FoodOption = ({ option, addOn }: IFoodOption) => {
  const [selectedOptions, setSelectedOptions] = useRecoilState(
    FoodModalSelectedOptionsAtom,
  );

  const addedDefaultOption = useRef(false);

  useEffect(() => {
    if (selectedOptions === undefined) {
      setSelectedOptions([]);
    }
  }, [selectedOptions, setSelectedOptions]);

  const isChecked = useMemo(() => {
    if (
      selectedOptions &&
      selectedOptions.find(
        (selectedOption) => selectedOption?.id === option?.id,
      )
    ) {
      return true;
    } else {
      return false;
    }
  }, [selectedOptions, option]);

  useEffect(() => {
    if (
      option?.default &&
      !addedDefaultOption.current &&
      !selectedOptions.some((selectedOption) => selectedOption.id === option.id)
    ) {
      addedDefaultOption.current = true; // Mark that the default option is added
      setSelectedOptions((prevOptions) => [
        ...prevOptions,
        {
          id: option.id,
          name: option.name,
          price: option.price,
          addOnName: addOn?.name as string,
        },
      ]);
    }
  }, [option, setSelectedOptions, addOn]);

  console.log('selectedOptions', selectedOptions);

  const selectOption = () => {
    if (
      selectedOptions.find(
        (selectedOption) => selectedOption?.id === option?.id,
      )
    ) {
      const arr = selectedOptions.filter(
        (selectOption) => selectOption?.id !== option?.id,
      );

      console.log('arr', arr);

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

  const disabled = useMemo(() => {
    const addOnSelectedOptions = selectedOptions?.filter(
      (selectOption) => selectOption?.addOnName === addOn?.name,
    );

    if (
      addOn?.maxOptionsSelected &&
      addOnSelectedOptions.length >= addOn?.maxOptionsSelected &&
      !addOnSelectedOptions.find(
        (selectedOption) => selectedOption?.id === option?.id,
      )
    ) {
      return true;
    }
    return false;
  }, [selectedOptions, addOn, option?.id]);

  return (
    <>
      {addOn?.name === 'Toppings' ? (
        <FoodOptionToppingStyle
          isChecked={isChecked}
          onChange={() => selectOption()}
          option={option}
          addOn={addOn}
          disabled={disabled}
        />
      ) : (
        <FoodOptionRegularStyle
          isChecked={isChecked}
          onChange={() => selectOption()}
          option={option}
          addOn={addOn}
          disabled={disabled}
        />
      )}
    </>
  );
};

export default FoodOption;
