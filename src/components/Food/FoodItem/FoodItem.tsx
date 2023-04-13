import { useEffect, useState } from 'react';

import { useFormContext } from 'react-hook-form';
import { useRecoilState, useRecoilValue } from 'recoil';
import { v4 } from 'uuid';

import {
  SelectedItemsAtom,
  SelectedSizeAtom,
} from '../../../state/FoodModalState';
import FoodItemSize from '../FoodItemSize/FoodItemSize';
import { FoodFormType } from '../FoodModal/types';

import useStyles from './css';
import { IFoodItem } from './types';

const FoodItem = ({ item }: IFoodItem) => {
  const [selectedItems, setSelectedItems] = useRecoilState(SelectedItemsAtom);
  const [rerender, setRerender] = useState<string>('');
  const selectedSize = useRecoilValue(SelectedSizeAtom);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    // this component needs a rerender when the selectedSize changes because the checkbox input will stay active
    setRerender(v4());
  }, [selectedSize]);

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
  }, [selectedItems, item, setSelectedItems, selectedSize]);

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
        htmlFor={item?.id || undefined}
      >
        <input
          {...register('foodItems')}
          type="checkbox"
          value={item?.id || undefined}
          id={item?.id || undefined}
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
