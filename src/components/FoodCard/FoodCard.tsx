import React from 'react';

// import useStyles from './css';
import { IFoodCard } from './types';

// type IFoodCard = {
//   food: NonNullable<NonNullable<FoodsQuery['foods'][number]>>;
//   activeFoodClick: (food: FoodsQuery['foods'][0]) => void;
// };

const FoodCard = ({ food, activeFoodClick }: IFoodCard) => {
  //   const classes = useStyles();
  return (
    <button onClick={() => activeFoodClick(food)}>
      <h2>{food?.price}</h2>
    </button>
  );
};

export default FoodCard;
