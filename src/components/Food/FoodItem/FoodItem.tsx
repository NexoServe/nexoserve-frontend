import { useEffect, useMemo } from 'react';

import { useFormContext } from 'react-hook-form';
import { useRecoilState } from 'recoil';

import { FoodModalSelectedItemsAtom } from '../../../state/FoodModalState';
import FoodItemSize from '../FoodItemSize/FoodItemSize';
import { FoodFormType } from '../FoodModal/types';

import useStyles from './css';
import { IFoodItem } from './types';

const FoodItem = ({ item }: IFoodItem) => {
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

  return (
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
  );
};

export default FoodItem;
