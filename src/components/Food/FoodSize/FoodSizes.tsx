import { useFormContext } from 'react-hook-form';
import { useRecoilState } from 'recoil';

import { SelectedSizeAtom } from '../../../state/FoodModalState';
import { FoodFormType } from '../FoodModal/types';

import { IFoodSize } from './types';

const FoodSize = ({ size }: IFoodSize) => {
  // const classes = useStyles();
  const [selectedSize, setSelectedSize] = useRecoilState(SelectedSizeAtom);

  console.log('selectedSize', selectedSize);

  const { register } = useFormContext<FoodFormType>();

  return (
    <div>
      <div>
        <label
          style={{
            display: 'flex',
          }}
          htmlFor={size?.id || ''}
        >
          <input
            {...register('foodSize')}
            type="radio"
            name="foodSize"
            id={size?.id || ''}
            value={size?.id || undefined}
            defaultChecked={size?.id === selectedSize?.id ? true : false}
            onClick={() => setSelectedSize(size)}
          />
          <h4>{size?.name}</h4>
          <p>${size?.price}</p>
        </label>
      </div>
    </div>
  );
};

export default FoodSize;
