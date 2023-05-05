import { FormEvent, useEffect, useMemo } from 'react';

import { useRecoilState } from 'recoil';
import { v4 } from 'uuid';

import { useFoodByIdLazyQuery } from '../../../../generated/graphql';
import {
  FoodModalAddOnRequiredAtom,
  FoodModalAddOnsAtom,
  FoodModalAtom,
  FoodModalPriceAtom,
  FoodModalSelectedItemsAtom,
} from '../../../state/FoodModalState';
import {
  ShoppingCartAtom,
  ShoppingCartTotalAtom,
} from '../../../state/ShoppingCartState';
import Draggable from '../../Draggable/Draggable';
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
  const [selectedItems, setSelectedItems] = useRecoilState(
    FoodModalSelectedItemsAtom,
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
    setSelectedItems([]);
    setRequiredAddOn(undefined);
    setFoodModalPrice(0);
  };

  useMemo(() => {
    if (selectedItems.some((item) => item.addOnId === requiredAddOn?.id)) {
      setRequiredAddOn(undefined);
    }
  }, [selectedItems, requiredAddOn, setRequiredAddOn]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const requiredAddOns = selectedAddOns?.filter(
      (addOn) => addOn?.isRequired === true,
    );

    const requiredAddOn = requiredAddOns?.find((addOn) => {
      return !selectedItems.some((item) => item.addOnId === addOn?.id);
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
          food: {
            id: foodModal.food?.id as string,
            name: foodModal.food?.name as string,
            price: foodModal.food?.price as number,
          },
          quantity: foodModal.quantity,
          selectedSize: foodModal.selectedSize,
          selectedItems: selectedItems.map((item) => ({
            id: item.id as string,
            name: item.name as string,
            price: item.price as number,
            addOnId: item.addOnId as string,
            itemSize: {
              id: item.itemSize?.id as string,
              name: item.itemSize?.name as string,
              price: item.itemSize?.price as number,
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
        selectedItems: selectedItems.map((item) => ({
          id: item.id as string,
          name: item.name as string,
          price: item.price as number,
          addOnId: item.addOnId as string,
          itemSize: {
            id: item.itemSize?.id as string,
            name: item.itemSize?.name as string,
            price: item.itemSize?.price as number,
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
          updatedArray[index] = {
            orderItemId: orderItemId as string,
            food: {
              id: foodModal.food?.id as string,
              name: foodModal.food?.name as string,
              price: foodModal.food?.price as number,
            },
            quantity: foodModal.quantity,
            selectedSize: foodModal.selectedSize,
            selectedItems: selectedItems.map((item) => ({
              id: item.id as string,
              name: item.name as string,
              price: item.price as number,
              addOnId: item.addOnId as string,
              itemSize: {
                id: item.itemSize?.id as string,
                name: item.itemSize?.name as string,
                price: item.itemSize?.price as number,
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

        return prevArray;
      });

      onClose();
    }
  };

  return (
    <ModalPopUp showModal={showModal} onClose={() => onClose()}>
      <Draggable onDragDown={() => onClose()} styleClass={classes.foodModal}>
        <FoodModalNav
          loading={loading}
          onClick={onClose}
          name={data?.foodById?.name}
        />

        <FoodModalCloseButton onClick={onClose} />

        <form
          onSubmit={onSubmit}
          className={classes.foodModalForm}
          id="foodModal"
        >
          {loading || error ? (
            <Loader styleClass={classes.foodModalLoader} />
          ) : (
            <FoodModalBody data={data} showModal={showModal} type={type} />
          )}
        </form>
      </Draggable>
    </ModalPopUp>
  );
};

export default FoodModal;
