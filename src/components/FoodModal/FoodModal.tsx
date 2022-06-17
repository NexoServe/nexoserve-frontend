import React from 'react';

import FoodAddOn from '../FoodAddOn/FoodAddOn';
// import useStyles from './css';
import { IFoodModal } from './types';

const FoodModal = ({ food }: IFoodModal) => {
  // const classes = useStyles();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('e', e.currentTarget);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{food?.name}</h2>
      <span>Price: ${food?.price}</span>
      <p>{food?.description}</p>
      {food?.addOns?.map((addOn) => (
        <FoodAddOn key={addOn?.id} addOn={addOn} />
      ))}

      <button>Add</button>
    </form>
  );
};

export default FoodModal;
