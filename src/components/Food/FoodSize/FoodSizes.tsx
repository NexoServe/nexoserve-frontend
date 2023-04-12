import { useFormContext } from 'react-hook-form';

import { FoodFormType } from '../FoodModal/types';

import { IFoodSize } from './types';

const FoodSize = ({ size, setSelectedSize, selectedSize }: IFoodSize) => {
  // const classes = useStyles();

  const { register } = useFormContext<FoodFormType>();

  return (
    <div>
      <div>
        <label
          style={{
            display: 'flex',
          }}
        >
          <input
            {...register('foodItems')}
            type="radio"
            value={size?.id || undefined}
            defaultChecked={size?.id === selectedSize?.id ? true : false}
            onClick={() => setSelectedSize(size)}
          />
          <h4>{size?.name}</h4>
          <p>${size?.price}</p>
        </label>
      </div>
      {/* <ul>
        {size?.addOns?.map((addOn) => (
          <FoodAddOn key={addOn?.id} addOn={addOn} />
        ))}
      </ul> */}
    </div>
  );
};

export default FoodSize;
