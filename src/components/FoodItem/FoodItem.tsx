import { useFormContext } from 'react-hook-form';

import FoodItemSize from '../FoodItemSize/FoodItemSize';
import { FoodFormType } from '../FoodModal/types';

import useStyles from './css';
import { IFoodItem } from './types';

const FoodItem = ({ item, setSelectedItems, selectedItems }: IFoodItem) => {
  const classes = useStyles();

  const { register } = useFormContext<FoodFormType>();

  const selectItem = () => {
    if (selectedItems.find((selectItem) => selectItem?.id === item?.id)) {
      const arr = selectedItems.filter(
        (selectItem) => selectItem?.id !== item?.id,
      );
      setSelectedItems(arr);
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <div className={classes.foodItem}>
      <label>
        <input
          {...register('foodItems')}
          type="checkbox"
          value={item?.id || undefined}
          defaultChecked={
            selectedItems.find((selectedItem) => selectedItem?.id === item?.id)
              ? true
              : false
          }
          onClick={() => selectItem()}
        />
        {item?.name}
      </label>
      <span>${item?.price}</span>

      <div>
        {item?.itemSizes?.map((itemSize) => (
          <FoodItemSize key={itemSize?.id} itemSize={itemSize} />
        ))}
      </div>
    </div>
  );
};

export default FoodItem;
