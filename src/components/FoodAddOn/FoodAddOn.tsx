import React from 'react';

// import useStyles from './css';
import { IFoodAddOn } from './types';

const FoodAddOn = ({ addOn }: IFoodAddOn) => {
  //   const classes = useStyles();

  return (
    <div>
      <h2>{addOn?.name}</h2>
    </div>
  );
};

export default FoodAddOn;
