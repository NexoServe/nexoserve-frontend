import React from 'react';

import { useForm, useFormContext } from 'react-hook-form';

import { FoodFormType } from '../FoodModal/types';
import useStyles from './css';
import { IFoodItem } from './types';

const FoodItem = ({ item }: IFoodItem) => {
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useFormContext<FoodFormType>();

  return (
    <div className={classes.foodItem}>
      <label>
        <input
          {...register('foodItems')}
          type="checkbox"
          value={item?.id || undefined}
          onChange={() => console.log('first')}
        />
        {item?.name}
      </label>
      <span>${item?.price}</span>
    </div>
  );
};

export default FoodItem;
