import { useEffect, useMemo, useState } from 'react';

import Image from 'next/image';
import { FormProvider, useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';

import { base } from '../../../../css/base';
import { useFoodByIdQuery } from '../../../../generated/graphql';
import Pizza from '../../../assets/pizza.jpg';
import {
  SelectedItemsAtom,
  SelectedSizeAtom,
} from '../../../state/FoodModalState';
import { ModalPopUp } from '../../Modal/Modal';
import SvgIcons from '../../SvgIcons';
import FoodAddOn from '../FoodAddOn/FoodAddOn';
import { AddOnType } from '../FoodAddOn/types';
import FoodModalFooter from '../FoodModalFooter/FoodModalFooter';
import FoodModalHeader from '../FoodModalHeader/FoodModalHeader';
import FoodModalNav from '../FoodModalNav/FoodModalNav';
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
  const [, setSelectedItems] = useRecoilState(SelectedItemsAtom);
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

  const price = useMemo(() => {
    if (data?.foodById?.sizes) {
      return data?.foodById?.sizes?.[0]?.price;
    } else {
      return data?.foodById?.price;
    }
  }, [data?.foodById]);

  const orderItemQuantity = methods.watch('orderItemQuantity');

  const decreaseQuantity = () => {
    if (orderItemQuantity > 1) {
      methods.setValue('orderItemQuantity', orderItemQuantity - 1);
    }
  };

  const increaseQuantity = () => {
    methods.setValue('orderItemQuantity', orderItemQuantity + 1);
  };

  const onClose = () => {
    setShowModal(false);
    setSelectedSize(undefined);
    setAddOns(undefined);
    setSelectedItems([]);
  };

  return (
    <ModalPopUp
      showModal={showModal}
      setShowModal={setShowModal}
      onClose={() => onClose()}
    >
      <div className={classes.foodModal}>
        <FoodModalNav name={data?.foodById?.name} />
        <button
          onClick={() => setShowModal(false)}
          className={classes.foodModalCloseBtn}
        >
          <SvgIcons name="closeFilledWhite" />
        </button>
        <FormProvider {...methods}>
          <form
            //onSubmit={methods.handleSubmit(onSubmit)}
            className={classes.foodModalForm}
            id="foodModal"
          >
            <div className={classes.foodModalImage}>
              <Image
                src={Pizza}
                layout="responsive"
                objectFit="cover"
                style={{
                  minWidth: '100%',
                  maxHeight: base(40),
                }}
                alt="hey"
                quality={100}
              />
            </div>
            <div className={classes.foodModalContent}>
              <FoodModalHeader
                name={data?.foodById?.name}
                description={data?.foodById?.description}
              />

              {selectedSize ? (
                <div className={classes.foodModalChildBorder}>
                  {data?.foodById?.sizes?.map((size) => (
                    <FoodSize
                      key={size?.id}
                      size={size}
                      setSelectedSize={setSelectedSize}
                      selectedSize={selectedSize}
                    />
                  ))}
                </div>
              ) : null}

              {addOns &&
                addOns?.map((addOn) => (
                  <div key={addOn?.id} className={classes.foodModalChildBorder}>
                    <FoodAddOn addOn={addOn} />
                  </div>
                ))}
            </div>

            <FoodModalFooter />
          </form>
        </FormProvider>
      </div>
    </ModalPopUp>
  );
};

export default FoodModal;
