import { FormEvent, useEffect, useMemo } from 'react';

import { useRecoilState } from 'recoil';
import { v4 } from 'uuid';

import { useFoodByIdLazyQuery } from '../../../../generated/graphql';
import {
  FoodModalAddOnRequiredAtom,
  FoodModalAddOnsAtom,
  FoodModalAtom,
  FoodModalPriceAtom,
  FoodModalSelectedOptionsAtom,
} from '../../../state/FoodModalState';
import {
  ShoppingCartAtom,
  ShoppingCartTotalAtom,
} from '../../../state/ShoppingCartState';
import Loader from '../../Loader/Loader';
import { ModalPopUp } from '../../Modal/Modal';
import FoodModalBody from '../FoodModalBody/FoodModalBody';
import FoodModalCloseButton from '../FoodModalCloseButton/FoodModalCloseButton';
import FoodModalNav from '../FoodModalNav/FoodModalNav';

import useStyles from './css';
import { IFoodModal } from './types';

const FoodModal = ({
  foodId,
  showModal,
  setShowModal,
  type,
  orderItemId,
}: IFoodModal) => {
  const [getFoodById, { data, loading, error }] = useFoodByIdLazyQuery({
    variables: {
      id: foodId,
    },
    notifyOnNetworkStatusChange: true,
  });

  console.log('loading', loading);
  const [shoppingCartTotal, setShoppingCartTotal] = useRecoilState(
    ShoppingCartTotalAtom,
  );

  useEffect(() => {
    const fetchData = async () => {
      if (showModal) {
        await getFoodById();
      }
    };
    fetchData();
  }, [showModal, getFoodById]);

  const classes = useStyles();

  const [shoppingCart, setShoppingCart] = useRecoilState(ShoppingCartAtom);
  const [foodModal, setFoodModal] = useRecoilState(FoodModalAtom);
  const [selectedAddOns, setAddOns] = useRecoilState(FoodModalAddOnsAtom);
  const [requiredAddOn, setRequiredAddOn] = useRecoilState(
    FoodModalAddOnRequiredAtom,
  );
  const [selectedOptions, setSelectedOptions] = useRecoilState(
    FoodModalSelectedOptionsAtom,
  );
  const [foodModalPrice, setFoodModalPrice] =
    useRecoilState(FoodModalPriceAtom);

  const onClose = () => {
    setShowModal(false);
    setFoodModal({
      food: undefined,
      selectedSize: undefined,
      quantity: 1,
    });
    setAddOns(undefined);
    setSelectedOptions([]);
    setRequiredAddOn(undefined);
    setFoodModalPrice(0);
    document.body.style.overflow = 'unset';
  };

  useMemo(() => {
    if (
      selectedOptions.some((option) => option.addOnName === requiredAddOn?.name)
    ) {
      setRequiredAddOn(undefined);
    }
  }, [selectedOptions, requiredAddOn, setRequiredAddOn]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const requiredAddOns = selectedAddOns?.filter(
      (addOn) => addOn?.isRequired === true,
    );

    const requiredAddOn = requiredAddOns?.find((addOn) => {
      return !selectedOptions.some(
        (option) => option.addOnName === addOn?.name,
      );
    });

    if (requiredAddOn) {
      setRequiredAddOn(requiredAddOn);
      return;
    }

    if (type === 'create') {
      const orderItemId = v4();

      setShoppingCartTotal({
        ...shoppingCartTotal,
        isValidated: false,
      });

      setShoppingCart([
        ...shoppingCart,
        {
          orderItemId: orderItemId,
          food: foodModal.food,
          quantity: foodModal.quantity,
          selectedSize: foodModal.selectedSize,
          selectedOptions: selectedOptions.map((option) => ({
            id: option.id,
            name: option.name,
            price: option.price,
            addOnName: option.addOnName as string,
            optionSize: {
              id: option.optionSize?.id as string,
              name: option.optionSize?.name as string,
              price: option.optionSize?.price as number,
            },
          })),
          price: foodModalPrice,
        },
      ]);

      const shoppingCartItems = localStorage.getItem('shoppingCartItems');
      let shoppingCartItemsParsed;
      try {
        shoppingCartItemsParsed = JSON.parse(shoppingCartItems as string) || [];
      } catch (error) {
        localStorage.removeItem('shoppingCartItems');
      }

      shoppingCartItemsParsed?.push({
        orderItemId: orderItemId as string,
        food: {
          id: foodModal.food?.id as string,
          name: foodModal.food?.name as string,
          price: foodModal.food?.price as number,
        },
        quantity: foodModal.quantity,
        selectedSize: {
          id: foodModal.selectedSize?.id as string,
          name: foodModal.selectedSize?.name as string,
          price: foodModal.selectedSize?.price as number,
        },
        selectedOptions: selectedOptions.map((option) => ({
          id: option.id as string,
          name: option.name as string,
          price: option.price as number,
          addOnName: option.addOnName as string,
          optionSize: {
            id: option.optionSize?.id as string,
            name: option.optionSize?.name as string,
            price: option.optionSize?.price as number,
          },
        })),
        price: foodModalPrice,
      });

      localStorage.setItem(
        'shoppingCartItems',
        JSON.stringify(shoppingCartItemsParsed),
      );

      onClose();
    } else {
      setShoppingCartTotal({
        ...shoppingCartTotal,
        isValidated: false,
      });

      setShoppingCart((prevArray) => {
        const index = prevArray.findIndex(
          (item) => item.orderItemId === orderItemId,
        );

        if (index !== -1) {
          const updatedArray = [...prevArray];
          if (foodModal.quantity === 0) {
            updatedArray.splice(index, 1);

            localStorage.setItem(
              'shoppingCartItems',
              JSON.stringify(updatedArray),
            );

            return updatedArray;
          } else {
            updatedArray[index] = {
              orderItemId: orderItemId as string,
              food: {
                id: foodModal.food?.id as string,
                name: foodModal.food?.name as string,
                price: foodModal.food?.price as number,
              },
              quantity: foodModal.quantity,
              selectedSize: foodModal.selectedSize,
              selectedOptions: selectedOptions.map((option) => ({
                id: option.id as string,
                name: option.name as string,
                price: option.price as number,
                addOnName: option.addOnName as string,
                optionSize: {
                  id: option.optionSize?.id as string,
                  name: option.optionSize?.name as string,
                  price: option.optionSize?.price as number,
                },
              })),
              price: foodModalPrice,
            };

            localStorage.setItem(
              'shoppingCartItems',
              JSON.stringify(updatedArray),
            );

            return updatedArray;
          }
        }
        return prevArray;
      });

      onClose();
    }
  };

  if (error) {
    console.log('error', error);
  }

  return (
    <ModalPopUp showModal={showModal} onClose={() => onClose()}>
      <div className={classes.foodModal}>
        <FoodModalNav
          loading={loading}
          onClick={onClose}
          name={data?.foodById.name}
        />

        <FoodModalCloseButton onClick={onClose} />

        <form
          onSubmit={onSubmit}
          className={classes.foodModalForm}
          id="foodModal"
        >
          {loading || !data ? (
            <Loader styleClass={classes.foodModalLoader} />
          ) : (
            <FoodModalBody
              food={data.foodById}
              showModal={showModal}
              type={type}
            />
          )}
        </form>
      </div>
    </ModalPopUp>
  );
};

export default FoodModal;
