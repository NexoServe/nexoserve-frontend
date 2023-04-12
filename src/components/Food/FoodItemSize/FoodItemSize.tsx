import { useEffect, useState } from 'react';

import { useFormContext } from 'react-hook-form';
import { useRecoilState } from 'recoil';

import {
  SelectedItemsAtom,
  SelectedItemSizesAtom,
} from '../../../state/FoodModalState';
import { FoodFormType } from '../FoodModal/types';

import { IFoodItemSize } from './types';

const FoodItemSize = ({ itemSize, item }: IFoodItemSize) => {
  const [selectedItemSizes, setSelectedItemSizes] = useRecoilState(
    SelectedItemSizesAtom,
  );
  const [selectedItems, setSelectedItems] = useRecoilState(SelectedItemsAtom);
  const [isChecked, setIsChecked] = useState(false);

  const addItemSize = () => {
    const parentSelectedItemSize = selectedItemSizes.find(
      (selectedItemSize) => selectedItemSize.parentName === item?.name,
    );
    console.log('parentSelectedItemSize', parentSelectedItemSize);

    if (
      !selectedItems.find((selectedItem) => selectedItem?.name === item?.name)
    ) {
      setSelectedItems([
        ...selectedItems,
        {
          ...item,
        },
      ]);
    }

    if (parentSelectedItemSize) {
      const arr = selectedItemSizes.map((selectItemSize) => {
        if (selectItemSize.parentName === item?.name) {
          return {
            id: `${itemSize?.name}-${item?.name}`,
            name: itemSize?.name,
            parentName: item?.name,
          };
        }

        return selectItemSize;
      });
      setSelectedItemSizes(arr);
    } else {
      setSelectedItemSizes([
        ...selectedItemSizes,
        {
          id: `${itemSize?.name}-${item?.name}`,
          name: itemSize?.name,
          parentName: item?.name,
        },
      ]);
    }
  };

  useEffect(() => {
    const selectedItem = selectedItemSizes.find(
      (selectedItem) => selectedItem?.id === `${itemSize?.name}-${item?.name}`,
    );

    if (selectedItem) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [selectedItemSizes, item, itemSize]);

  const { register } = useFormContext<FoodFormType>();

  console.log('selectedItemSizes', selectedItemSizes);

  return (
    <div>
      <label htmlFor={itemSize?.id || ''}>
        <input
          {...register('foodItemSize')}
          type="checkbox"
          name={`itemSize-${item?.name}`}
          value={itemSize?.id || undefined}
          id={itemSize?.id || ''}
          checked={isChecked}
          onChange={() => addItemSize()}
        />
        {itemSize?.name}
      </label>
      <span>${itemSize?.price}</span>
    </div>
  );
};

export default FoodItemSize;
