import { useFormContext } from 'react-hook-form';

import { FoodFormType } from '../FoodModal/types';

import { IFoodItemSizePortion } from './types';

const FoodItemSizePortion = ({ itemSizePortion }: IFoodItemSizePortion) => {
  const { register } = useFormContext<FoodFormType>();

  return (
    <div>
      {/* <label>
        <input
          {...register('foodItems')}
          type="checkbox"
          value={itemSizePortion?.id || undefined}
          defaultChecked={itemSizePortion?.default ? true : false}
        />
        {itemSizePortion?.name}
      </label>
      <span>${itemSizePortion?.price}</span> */}
    </div>
  );
};

export default FoodItemSizePortion;
