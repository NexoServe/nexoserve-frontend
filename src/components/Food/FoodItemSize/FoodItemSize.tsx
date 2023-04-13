import { useEffect, useState } from 'react';

import { useFormContext } from 'react-hook-form';
import { useRecoilState } from 'recoil';

import { SelectedItemsAtom } from '../../../state/FoodModalState';
import { FoodFormType } from '../FoodModal/types';

import { IFoodItemSize } from './types';

const FoodItemSize = ({ itemSize, item }: IFoodItemSize) => {
  const [selectedItems, setSelectedItems] = useRecoilState(SelectedItemsAtom);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const selectedItem = selectedItems.find(
      (selectedItem) => selectedItem?.name === item?.name,
    );

    if (selectedItem?.itemSize?.name === itemSize?.name) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [selectedItems, item, itemSize]);

  const addItemSize = () => {
    const itemSizeParent = selectedItems.find(
      (selectedItem) => selectedItem.name === item?.name,
    );

    if (itemSizeParent && itemSizeParent?.itemSize?.name === itemSize?.name) {
      const filteredItems = selectedItems.filter(
        (selectItem) => selectItem?.name !== item?.name,
      );
      setSelectedItems(filteredItems);
    } else if (itemSizeParent) {
      const arr = selectedItems.map((selectItem) => {
        if (selectItem.name === item?.name) {
          return {
            id: item?.id,
            name: item?.name,
            price: item?.price,
            itemSize: {
              id: itemSize?.id,
              name: itemSize?.name,
              price: itemSize?.price,
            },
          };
        }

        return selectItem;
      });
      setSelectedItems(arr);
    } else {
      setSelectedItems([
        ...selectedItems,
        {
          id: item?.id,
          name: item?.name,
          price: item?.price,
          itemSize: {
            id: itemSize?.id,
            name: itemSize?.name,
            price: itemSize?.price,
          },
        },
      ]);
    }
  };

  const { register } = useFormContext<FoodFormType>();

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
