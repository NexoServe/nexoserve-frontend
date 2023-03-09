import { useFormContext } from 'react-hook-form';

import { FoodFormType } from '../FoodModal/types';

import { IFoodItemSize } from './types';

const FoodItemSize = ({ itemSize }: IFoodItemSize) => {
  const { register } = useFormContext<FoodFormType>();

  return (
    <div>
      <label>
        <input
          {...register('foodItems')}
          type="checkbox"
          value={itemSize?.id || undefined}
          defaultChecked={itemSize?.default ? true : false}
        />
        {itemSize?.name}
      </label>
      <span>${itemSize?.price}</span>

      {/* <div>
        {itemSize?.portions?.map((portion) => (
          <FoodItemSizePortion key={itemSize?.id} itemSizePortion={portion} />
        ))}
      </div> */}
    </div>
  );
};

export default FoodItemSize;
