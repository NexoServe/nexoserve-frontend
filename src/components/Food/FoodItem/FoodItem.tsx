import { useEffect, useMemo } from 'react';

import { useRecoilState } from 'recoil';

import { FoodModalSelectedItemsAtom } from '../../../state/FoodModalState';
import FoodItemRegularStyle from '../FoodItemRegularStyle/FoodItemRegularStyle';
import FoodItemToppingStyle from '../FoodItemToppingStyle/FoodItemToppingStyle';

import { IFoodItem } from './types';

const FoodItem = ({ item, addOn }: IFoodItem) => {
  const [selectedItems, setSelectedItems] = useRecoilState(
    FoodModalSelectedItemsAtom,
  );

  useEffect(() => {
    if (selectedItems === undefined) {
      setSelectedItems([]);
    }
  }, [selectedItems, setSelectedItems]);

  const isChecked = useMemo(() => {
    if (
      selectedItems &&
      selectedItems.find((selectedItem) => selectedItem?.name === item?.name)
    ) {
      return true;
    } else {
      return false;
    }
  }, [selectedItems, item]);

  const selectItem = () => {
    if (
      selectedItems.find((selectedItem) => selectedItem?.name === item?.name)
    ) {
      const arr = selectedItems.filter(
        (selectItem) => selectItem?.name !== item?.name,
      );
      setSelectedItems(arr);
    } else {
      setSelectedItems([
        ...selectedItems,
        {
          id: item?.id,
          name: item?.name,
          price: item?.price,
          addOn: addOn?.id,
          itemSize: item?.itemSizes?.find(
            (itemSize) => itemSize?.default === true,
          ),
        },
      ]);
    }
  };

  return (
    <>
      {addOn?.name === 'Toppings' ? (
        <FoodItemToppingStyle
          isChecked={isChecked}
          onChange={() => selectItem()}
          item={item}
          addOn={addOn}
        />
      ) : (
        <FoodItemRegularStyle
          isChecked={isChecked}
          onChange={() => selectItem()}
          item={item}
          addOn={addOn}
        />
      )}
    </>
  );
};

export default FoodItem;
