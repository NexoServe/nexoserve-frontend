import { useEffect, useState } from 'react';

import { useFormContext } from 'react-hook-form';
import { useRecoilState } from 'recoil';

import {
  SelectedItemsAtom,
  SelectedItemSizesAtom,
} from '../../../state/FoodModalState';
import FoodItemSize from '../FoodItemSize/FoodItemSize';
import { FoodFormType } from '../FoodModal/types';

import useStyles from './css';
import { IFoodItem } from './types';

const FoodItem = ({ item }: IFoodItem) => {
  const [selectedItems, setSelectedItems] = useRecoilState(SelectedItemsAtom);
  const [selectedItemSizes, setSelectedItemSizes] = useRecoilState(
    SelectedItemSizesAtom,
  );
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (selectedItems === undefined) {
      setSelectedItems([]);
    }
  }, [selectedItems, setSelectedItems]);

  useEffect(() => {
    if (
      selectedItems &&
      selectedItems.find((selectedItem) => selectedItem?.name === item?.name)
    ) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [selectedItems, item]);

  const classes = useStyles();

  const { register } = useFormContext<FoodFormType>();

  const selectItem = () => {
    const defaultItemSize = item?.itemSizes?.find(
      (itemSize) => itemSize?.default === true,
    );
    if (
      !selectedItemSizes.find(
        (selectedItemSize) =>
          selectedItemSize?.id === `${defaultItemSize?.name}-${item?.name}`,
      )
    ) {
      setSelectedItemSizes([
        ...selectedItemSizes,
        {
          id: `${defaultItemSize?.name}-${item?.name}`,
          name: defaultItemSize?.name,
          parentName: item?.name,
        },
      ]);
    }

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
        },
      ]);
    }
  };

  return selectedItems !== undefined ? (
    <div className={classes.foodItem}>
      <label
        style={{
          background: selectedItems.find(
            (selectedItem) => selectedItem?.name === item?.name,
          )
            ? 'red'
            : 'transparent',
        }}
      >
        <input
          {...register('foodItems')}
          type="checkbox"
          value={item?.id || undefined}
          checked={isChecked}
          onChange={() => selectItem()}
        />
        {item?.name}
      </label>
      <span>${item?.price}</span>

      <div>
        {item?.itemSizes?.map((itemSize) => (
          <FoodItemSize item={item} key={itemSize?.id} itemSize={itemSize} />
        ))}
      </div>
    </div>
  ) : null;
};

export default FoodItem;
