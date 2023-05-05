import { useMemo } from 'react';

import { useRecoilState } from 'recoil';

import {
  FoodModalSelectedItemsAtom,
  SelectedItemType,
} from '../../../state/FoodModalState';
import FoodItemToppingStyleSize from '../FoodItemSizeToppingStyle/FoodItemSizeToppingStyle';

import { IFoodItemSize } from './types';

const FoodItemSize = ({ itemSize, item, addOn }: IFoodItemSize) => {
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
      const arr: SelectedItemType[] = selectedItems.map((selectItem) => {
        if (selectItem.name === item?.name) {
          return {
            id: item?.id,
            name: item?.name,
            price: item?.price,
            addOnId: addOn?.id,
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
          addOnId: addOn?.id,
          itemSize: {
            id: itemSize?.id,
            name: itemSize?.name,
            price: itemSize?.price,
          },
        },
      ]);
    }
  };

  return (
    <FoodItemToppingStyleSize
      isChecked={isChecked}
      onChange={() => addItemSize()}
      item={item}
      itemSize={itemSize}
    />
  );
};

export default FoodItemSize;
