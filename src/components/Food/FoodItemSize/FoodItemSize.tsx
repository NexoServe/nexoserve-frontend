import { useMemo } from 'react';

import { useFormContext } from 'react-hook-form';
import { useRecoilState } from 'recoil';

import { FoodModalSelectedItemsAtom } from '../../../state/FoodModalState';
import { FoodFormType } from '../FoodModal/types';

import { IFoodItemSize } from './types';

const FoodItemSize = ({ itemSize, item }: IFoodItemSize) => {
  const [selectedItems, setSelectedItems] = useRecoilState(
    FoodModalSelectedItemsAtom,
  );

  const isChecked = useMemo(() => {
    const selectedItem = selectedItems.find(
      (selectedItem) => selectedItem?.name === item?.name,
    );

    if (selectedItem?.itemSize?.name === itemSize?.name) {
      return true;
    } else {
      return false;
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
      <svg viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg">
        <path
          style={{ backgroundColor: 'red' }}
          // initial={{ pathLength: 0 }}
          // animate={{ pathLength: 1 }}
          // transition={{
          //   duration: 1,
          //   ease: 'easeInOut',
          //   repeat: Infinity,
          //   repeatType: 'loop',
          //   repeatDelay: 2,
          // }}
          strokeWidth={4}
          d="M 0, 5 L 100, 5"
        />
      </svg>

      <label
        style={{
          backgroundColor: isChecked ? 'green' : 'white',
        }}
        htmlFor={itemSize?.id || ''}
      >
        <div
          style={{
            width: '10px',
            height: '10px',
            border: '1px solid black',
            backgroundColor: isChecked ? 'green' : 'white',
          }}
        ></div>

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
