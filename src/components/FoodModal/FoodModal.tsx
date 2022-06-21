import React from 'react';

import { SubmitHandler, useForm, useFormContext } from 'react-hook-form';

import {
  CreateOrderInput,
  useCreateOrderMutation,
} from '../../../generated/graphql';
// import { useCreateOrderMutation } from '../../../generated/graphql';
import FoodAddOn from '../FoodAddOn/FoodAddOn';
// import useStyles from './css';
import { FoodFormType, IFoodModal } from './types';

const FoodModal = ({ food }: IFoodModal) => {
  // const classes = useStyles();
  const [createOrder, { data }] = useCreateOrderMutation();

  console.log('datadata', data);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useFormContext<FoodFormType>();

  const onSubmit: SubmitHandler<FoodFormType> = (data) => {
    console.log('data.foodItems', data.foodItems);
    createOrder({
      variables: {
        createOrderInput: {
          foodId: food?.id as string,
          itemIds: data.foodItems,
        },
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
