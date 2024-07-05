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
    // Check if maxOptionsSelected is defined and equals 1
    if (addOn?.maxOptionsSelected && addOn?.maxOptionsSelected === 1) {
      const findAddOnOption = addOn.options?.find((option1) =>
        selectedOptions.some((option2) => option2?.id === option1?.id),
      );

      // Filter out the existing option
      const arr = selectedOptions.filter(
        (selectOption) => selectOption?.id !== findAddOnOption?.id,
      );

      // Add the new option with the selected option size
      setSelectedOptions([
        ...arr,
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
    } else {
      // Check if the selected option already exists
      const optionSizeParent = selectedOptions.find(
        (selectedOption) =>
          `${selectedOption.addOnName}-${selectedOption.name}` ===
          `${addOn?.name}-${option?.name}`,
      );

      if (
        optionSizeParent &&
        optionSizeParent?.optionSize?.name === optionSize?.name
      ) {
        // If the same option size is selected again, remove it
        const filteredOptions = selectedOptions.filter(
          (selectOption) =>
            `${selectOption.addOnName}-${selectOption.name}` !==
            `${addOn?.name}-${option?.name}`,
        );

        setSelectedOptions(filteredOptions);
      } else if (optionSizeParent) {
        // If the option exists but with a different size, update the size
        const arr: OptionWithSizeType[] = selectedOptions.map(
          (selectOption) => {
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
          },
        );
        setSelectedOptions(arr);
      } else {
        // If the option does not exist, add it with the selected option size
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
