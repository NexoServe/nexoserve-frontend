import React from 'react';

import useStyles from './css';
import { IFoodItem } from './types';

const FoodItem = ({ item }: IFoodItem) => {
  const classes = useStyles();

  return (
    <div className={classes.foodItem}>
      <label>
        <input
          type="checkbox"
          name="foodItem"
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
