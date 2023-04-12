import { useEffect, useMemo, useState } from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import { useFoodByIdQuery } from '../../../../generated/graphql';
import FoodAddOn from '../FoodAddOn/FoodAddOn';
import { ItemType } from '../FoodItem/types';
import FoodSize from '../FoodSize/FoodSizes';
import { SizeType } from '../FoodSize/types';

import useStyles from './css';
import { FoodFormType, IFoodModal } from './types';

const FoodModal = ({ foodId }: IFoodModal) => {
  const classes = useStyles();

  const { data } = useFoodByIdQuery({
    variables: {
      id: foodId,
    },
    notifyOnNetworkStatusChange: true,
  });

  const food = data?.foodById;

  console.log('food', food);

  const [selectedItems, setSelectedItems] = useState<ItemType[]>([]);
  const [selectedSize, setSelectedSize] = useState<SizeType | undefined>(
    food?.sizes?.[0],
  );

  useEffect(() => {
    setSelectedSize(food?.sizes?.[0]);
  }, [food]);

  console.log('selectedSize', selectedSize);
  console.log('selectedItems', selectedItems);

  //TODO
  // const [createOrder, { data }] = useCreateOrderMutation();
  // const [shoppingCart, setShoppingCart] = useRecoilState(ShoppingCartAtom);
  // const [order, setOrder] = useRecoilState(OrderAtom);

  const methods = useForm<FoodFormType>({
    defaultValues: {
      foodItems: [],
      orderItemQuantity: 1,
    },
  });

  const price = useMemo(() => {
    if (food?.sizes) {
      return food?.sizes?.[0]?.price;
    } else {
      return food?.price;
    }
  }, [food]);

  const addOns = useMemo(() => {
    if (food?.sizes) {
      return selectedSize?.addOns;
    } else {
      return food?.addOns;
    }
  }, [food, selectedSize]);

  useMemo(() => {
    if (selectedSize) {
      const items = selectedSize.addOns?.map((addOn) => addOn?.items).flat();

      const arr = items?.filter((item) => {
        return selectedItems.some(
          (selectedItem) => selectedItem?.name === item?.name,
        );
      });

      setSelectedItems(arr as ItemType[]);
    }
  }, [selectedSize]);

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
        style={{ background: '#fff', overflow: 'auto', maxHeight: '500px' }}
      >
        <h2>{food?.name}</h2>
        <span>Price: ${price}</span>
        <p>{food?.description}</p>

        {food?.sizes?.map((size) => (
          <FoodSize
            key={size?.id}
            size={size}
            setSelectedSize={setSelectedSize}
            selectedSize={selectedSize}
          />
        ))}

        {addOns?.map((addOn) => (
          <FoodAddOn
            key={addOn?.id}
            addOn={addOn}
            setSelectedItems={setSelectedItems}
            selectedItems={selectedItems}
          />
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
