import React from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import FoodAddOn from '../FoodAddOn/FoodAddOn';
import useStyles from './css';
import { FoodFormType, IFoodModal } from './types';

const FoodModal = ({ food }: IFoodModal) => {
  const classes = useStyles();
  //TODO
  // const [createOrder, { data }] = useCreateOrderMutation();
  // const [shoppingCart, setShoppingCart] = useRecoilState(ShoppingCartAtom);
  // const [order, setOrder] = useRecoilState(OrderAtom);

  console.log('rerender');

  const methods = useForm<FoodFormType>({
    defaultValues: {
      foodItems: [],
      orderItemQuantity: 1,
    },
  });
  //TODO
  // const onSubmit: SubmitHandler<FoodFormType> = (data) => {
  //   const items: IFoodItem[] = [];

  //   console.log('data', data);

  //   setOrder([
  //     ...order,
  //     {
  //       foodId: food?.id,
  //       itemIds: data.foodItems,
  //       quantity: data.orderItemQuantity,
  //     },
  //   ]);

  //   food?.addOns?.map((addOn) => {
  //     addOn?.items?.map((item) => {
  //       if (data.foodItems.includes(item?.id as string)) {
  //         items.push(item as IFoodItem);
  //       }
  //     });
  //   });

  //   setShoppingCart([
  //     ...shoppingCart,
  //     {
  //       orderItemId: v4(),
  //       food: food,
  //       foodItems: items,
  //       foodIds: data.foodItems,
  //       orderItemQuantity: data?.orderItemQuantity,
  //     },
  //   ]);

  //   console.log('items', items);

  //   // createOrder({
  //   //   variables: {
  //   //     createOrderInput: {
  //   //       foodId: food?.id as string,
  //   //       itemIds: data.foodItems,
  //   //     },
  //   //   },
  //   // });
  // };

  const orderItemQuantity = methods.watch('orderItemQuantity');

  const decreaseQuantity = () => {
    if (orderItemQuantity > 1) {
      methods.setValue('orderItemQuantity', orderItemQuantity - 1);
    }
  };

  const increaseQuantity = () => {
    methods.setValue('orderItemQuantity', orderItemQuantity + 1);
  };

  return (
    <FormProvider {...methods}>
      <form
      //onSubmit={methods.handleSubmit(onSubmit)}
      >
        <h2>{food?.name}</h2>
        <span>Price: ${food?.price}</span>
        <p>{food?.description}</p>
        {food?.addOns?.map((addOn) => (
          <FoodAddOn key={addOn?.id} addOn={addOn} />
        ))}

        <div>
          <button onClick={() => decreaseQuantity()} type="button">
            -
          </button>
          <input
            className={classes.foodModalQuantity}
            type="number"
            {...methods.register('orderItemQuantity')}
            value={orderItemQuantity}
          />
          <button onClick={() => increaseQuantity()} type="button">
            +
          </button>
        </div>

        <button>Add</button>
      </form>
    </FormProvider>
  );
};

export default FoodModal;
