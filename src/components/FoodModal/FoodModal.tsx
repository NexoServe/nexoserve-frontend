import React from 'react';

import FoodAddOn from '../FoodAddOn/FoodAddOn';
// import useStyles from './css';
import { IFoodModal } from './types';

const FoodModal = ({ food }: IFoodModal) => {
  // const classes = useStyles();
  return (
    <div>
      <h2>{food?.name}</h2>
      <span>Price: {food?.price}</span>

      {food?.addOns?.map((addOn) => (
        <>
          <FoodAddOn addOn={addOn} />
        </>
      ))}
    </div>
  );
};

export default FoodModal;
