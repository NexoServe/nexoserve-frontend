import { FormEvent, useMemo } from 'react';

import { useRecoilState } from 'recoil';

import { useFoodByIdQuery } from '../../../../generated/graphql';
import {
  FoodModalAddOnRequiredAtom,
  FoodModalAddOnsAtom,
  FoodModalAtom,
  FoodModalSelectedItemsAtom,
} from '../../../state/FoodModalState';
import Draggable from '../../Draggable/Draggable';
import Loader from '../../Loader/Loader';
import { ModalPopUp } from '../../Modal/Modal';
import FoodModalBody from '../FoodModalBody/FoodModalBody';
import FoodModalCloseButton from '../FoodModalCloseButton/FoodModalCloseButton';
import FoodModalNav from '../FoodModalNav/FoodModalNav';

import useStyles from './css';
import { IFoodModal } from './types';

const FoodModal = ({ foodId, showModal, setShowModal }: IFoodModal) => {
  const { data, loading, error } = useFoodByIdQuery({
    variables: {
      id: foodId,
    },
    notifyOnNetworkStatusChange: true,
  });

  console.log('data', data);

  const classes = useStyles();

  const [, setFoodModal] = useRecoilState(FoodModalAtom);
  const [selectedAddOns, setAddOns] = useRecoilState(FoodModalAddOnsAtom);
  const [requiredAddOn, setRequiredAddOn] = useRecoilState(
    FoodModalAddOnRequiredAtom,
  );
  const [selectedItems, setSelectedItems] = useRecoilState(
    FoodModalSelectedItemsAtom,
  );

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
  };

  useMemo(() => {
    if (selectedItems.some((item) => item.addOn === requiredAddOn?.id)) {
      setRequiredAddOn(undefined);
    }
  }, [selectedItems, requiredAddOn, setRequiredAddOn]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const requiredAddOns = selectedAddOns?.filter(
      (addOn) => addOn?.isRequired === true,
    );

    const requiredAddOn = requiredAddOns?.find((addOn) => {
      return !selectedItems.some((item) => item.addOn === addOn?.id);
    });

    if (requiredAddOn) {
      setRequiredAddOn(requiredAddOn);
      return;
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
            <FoodModalBody data={data} showModal={showModal} />
          )}
        </form>
      </Draggable>
    </ModalPopUp>
  );
};

export default FoodModal;
