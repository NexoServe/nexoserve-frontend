import { useMemo } from 'react';

import { useRecoilState } from 'recoil';

import { OptionWithSizeType } from '../../../../generated/graphql';
import { FoodModalSelectedOptionsAtom } from '../../../state/FoodModalState';
import FoodOptionToppingStyleSize from '../FoodOptionSizeToppingStyle/FoodOptionSizeToppingStyle';

import { IFoodOptionSize } from './types';

const FoodOptionSize = ({
  optionSize,
  option,
  addOn,
  theme,
}: IFoodOptionSize) => {
  const [selectedOptions, setSelectedOptions] = useRecoilState(
    FoodModalSelectedOptionsAtom,
  );

  const isChecked = useMemo(() => {
    const selectedOption = selectedOptions.find(
      (selectedOption) =>
        `${selectedOption.addOnName}-${selectedOption?.name}` ===
        `${addOn?.name}-${option?.name}`,
    );

    if (
      `${selectedOption?.addOnName}-${selectedOption?.optionSize?.name}` ===
      `${addOn?.name}-${optionSize?.name}`
    ) {
      return true;
    } else {
      return false;
    }
  }, [selectedOptions, option, optionSize]);

  const addOptionSize = () => {
    const optionSizeParent = selectedOptions.find(
      (selectedOption) =>
        `${selectedOption.addOnName}-${selectedOption.name}` ===
        `${addOn?.name}-${option?.name}`,
    );

    if (
      optionSizeParent &&
      optionSizeParent?.optionSize?.name === optionSize?.name
    ) {
      const filteredOptions = selectedOptions.filter(
        (selectOption) =>
          `${selectOption.addOnName}-${selectOption.name}` !==
          `${addOn?.name}-${option?.name}`,
      );

      setSelectedOptions(filteredOptions);
    } else if (optionSizeParent) {
      const arr: OptionWithSizeType[] = selectedOptions.map((selectOption) => {
        if (
          `${selectOption.addOnName}-${selectOption.name}` ===
          `${addOn?.name}-${option?.name}`
        ) {
          return {
            id: option.id as string,
            name: option?.name,
            price: option?.price,
            addOnName: addOn?.name as string,
            optionSize: {
              id: optionSize?.id,
              name: optionSize?.name,
              price: optionSize?.price,
            },
          };
        }

        return selectOption;
      });
      setSelectedOptions(arr);
    } else {
      setSelectedOptions([
        ...selectedOptions,
        {
          id: option?.id,
          name: option?.name,
          price: option?.price,
          addOnName: addOn?.name as string,
          optionSize: {
            id: optionSize?.id,
            name: optionSize?.name,
            price: optionSize?.price,
          },
        },
      ]);
    }
  };

  return (
    <FoodOptionToppingStyleSize
      isChecked={isChecked}
      onChange={() => addOptionSize()}
      option={option}
      optionSize={optionSize}
      theme={theme}
    />
  );
};

export default FoodOptionSize;
