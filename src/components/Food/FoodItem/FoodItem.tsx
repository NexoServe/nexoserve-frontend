import { useEffect, useMemo } from 'react';

import { useFormContext } from 'react-hook-form';
import { useRecoilState } from 'recoil';

import { FoodModalSelectedItemsAtom } from '../../../state/FoodModalState';
import FoodItemRegularStyle from '../FoodItemRegularStyle/FoodItemRegularStyle';
import FoodItemToppingStyle from '../FoodItemToppingStyle/FoodItemToppingStyle';
import { FoodFormType } from '../FoodModal/types';

import useStyles from './css';
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

  const classes = useStyles();

  const { register } = useFormContext<FoodFormType>();

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
          itemSize: item?.itemSizes?.find(
            (itemSize) => itemSize?.default === true,
          ),
        },
      ]);
    }
  };

  console.log('addOn?.name', addOn?.name);

  return (
    <>
      {addOn?.name === 'Toppings' ? (
        <FoodItemToppingStyle
          isChecked={isChecked}
          onChange={() => selectItem()}
          item={item}
          register={register}
        />
      ) : (
        <FoodItemRegularStyle
          isChecked={isChecked}
          onChange={() => selectItem()}
          item={item}
          register={register}
        />
      )}
    </>
  );
};

export default FoodItem;
