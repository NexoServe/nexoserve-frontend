import { useEffect, useMemo } from 'react';

import { useRecoilState } from 'recoil';

import { AddOnTypeEnum } from '../../../../generated/graphql';
import { FoodModalSelectedOptionsAtom } from '../../../state/FoodModalState';
import FoodOptionRegularStyle from '../FoodOptionRegularStyle/FoodOptionRegularStyle';
import FoodOptionToppingStyle from '../FoodOptionToppingStyle/FoodOptionToppingStyle';

import { IFoodOption } from './types';

const FoodOption = ({ option, addOn, theme }: IFoodOption) => {
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
        (selectedOption) => selectedOption?.id === option?.id,
      )
    ) {
      return true;
    } else {
      return false;
    }
  }, [selectedOptions, option]);

  const selectOption = () => {
    if (addOn?.maxOptionsSelected && addOn?.maxOptionsSelected === 1) {
      const findAddOnOption = addOn.options?.find((option1) =>
        selectedOptions.some((option2) => option2?.id === option1?.id),
      );

      const arr = selectedOptions.filter(
        (selectOption) => selectOption?.id !== findAddOnOption?.id,
      );

      setSelectedOptions([
        ...arr,
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
    } else {
      if (
        selectedOptions.find(
          (selectedOption) => selectedOption?.id === option?.id,
        )
      ) {
        const arr = selectedOptions.filter(
          (selectOption) => selectOption?.id !== option?.id,
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
    }
  };

  const disabled = useMemo(() => {
    if (!(addOn?.maxOptionsSelected && addOn.maxOptionsSelected === 1)) {
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
    }
    return false;
  }, [selectedOptions, addOn, option?.id]);

  return (
    <>
      {addOn?.type === AddOnTypeEnum.PizzaTopping ? (
        <FoodOptionToppingStyle
          isChecked={isChecked}
          onChange={() => selectOption()}
          option={option}
          addOn={addOn}
          disabled={disabled}
          theme={theme}
        />
      ) : (
        <FoodOptionRegularStyle
          isChecked={isChecked}
          onChange={() => selectOption()}
          option={option}
          addOn={addOn}
          disabled={disabled}
          theme={theme}
        />
      )}
    </>
  );
};

export default FoodOption;
