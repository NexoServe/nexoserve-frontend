import { useEffect, useState } from 'react';

import { FormProvider, useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';

import { useFoodByIdQuery } from '../../../../generated/graphql';
import {
  SelectedItemsAtom,
  SelectedSizeAtom,
} from '../../../state/FoodModalState';
import { ModalPopUp } from '../../Modal/Modal';
import FoodAddOn from '../FoodAddOn/FoodAddOn';
import { AddOnType } from '../FoodAddOn/types';
import FoodSize from '../FoodSize/FoodSizes';

import useStyles from './css';
import { FoodFormType, IFoodModal } from './types';

const FoodModal = ({ foodId, showModal, setShowModal }: IFoodModal) => {
  const { data } = useFoodByIdQuery({
    variables: {
      id: foodId,
    },
    notifyOnNetworkStatusChange: true,
  });

  const classes = useStyles();

  const [selectedSize, setSelectedSize] = useRecoilState(SelectedSizeAtom);
  const [selectedItems, setSelectedItems] = useRecoilState(SelectedItemsAtom);
  const [addOns, setAddOns] = useState<AddOnType[] | undefined | null>(
    undefined,
  );

  useEffect(() => {
    setSelectedSize(data?.foodById?.sizes?.[0]);
  }, [data, setSelectedSize, showModal]);

  useEffect(() => {
    setAddOns(selectedSize?.addOns || data?.foodById?.addOns);
  }, [selectedSize, data]);

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

  // const price = useMemo(() => {
  //   if (data?.foodById?.sizes) {
  //     return data?.foodById?.sizes?.[0]?.price;
  //   } else {
  //     return data?.foodById?.price;
  //   }
  // }, [data?.foodById]);

  // const addOns = useMemo(() => {
  //   if (data?.foodById?.sizes) {
  //     return selectedSize?.addOns;
  //   } else {
  //     return data?.foodById?.addOns;
  //   }
  // }, [data?.foodById, selectedSize]);

  // useMemo(() => {
  //   if (selectedSize) {
  //     const items = selectedSize.addOns?.map((addOn) => addOn?.items).flat();

  //     const arr = items?.filter((item) => {
  //       return selectedItems.some(
  //         (selectedItem) => selectedItem?.name === item?.name,
  //       );
  //     });

  //     setSelectedItems(arr as ItemType[]);
  //   }
  // }, [selectedSize]);

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
    <ModalPopUp
      showModal={showModal}
      setShowModal={setShowModal}
      onClose={() => {
        setSelectedSize(undefined);
        setAddOns(undefined);
        setSelectedItems([]);
      }}
    >
      <FormProvider {...methods}>
        <form
          //onSubmit={methods.handleSubmit(onSubmit)}
          style={{ background: '#fff', overflow: 'auto', maxHeight: '500px' }}
        >
          <h2>{data?.foodById?.name}</h2>
          {/* <span>Price: ${price}</span> */}
          <p>{data?.foodById?.description}</p>

          <div>
            {selectedSize &&
              data?.foodById?.sizes?.map((size) => (
                <FoodSize
                  key={size?.id}
                  size={size}
                  setSelectedSize={setSelectedSize}
                  selectedSize={selectedSize}
                />
              ))}
          </div>

          {addOns &&
            addOns?.map((addOn) => <FoodAddOn key={addOn?.id} addOn={addOn} />)}

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
    </ModalPopUp>
  );
};

export default FoodModal;
