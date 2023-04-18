import { FormProvider, useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';

import { useFoodByIdQuery } from '../../../../generated/graphql';
import {
  FoodModalAddOnsAtom,
  FoodModalSelectedItemsAtom,
  FoodModalSelectedSizeAtom,
} from '../../../state/FoodModalState';
import Draggable from '../../Draggable/Draggable';
import Loader from '../../Loader/Loader';
import { ModalPopUp } from '../../Modal/Modal';
import FoodModalBody from '../FoodModalBody/FoodModalBody';
import FoodModalCloseButton from '../FoodModalCloseButton/FoodModalCloseButton';
import FoodModalNav from '../FoodModalNav/FoodModalNav';

import useStyles from './css';
import { FoodFormType, IFoodModal } from './types';

const FoodModal = ({ foodId, showModal, setShowModal }: IFoodModal) => {
  const { data, loading, error } = useFoodByIdQuery({
    variables: {
      id: foodId,
    },
    notifyOnNetworkStatusChange: true,
  });

  const classes = useStyles();

  const [, setSelectedSize] = useRecoilState(FoodModalSelectedSizeAtom);
  const [, setAddOns] = useRecoilState(FoodModalAddOnsAtom);
  const [, setSelectedItems] = useRecoilState(FoodModalSelectedItemsAtom);

  const methods = useForm<FoodFormType>({
    defaultValues: {
      foodItems: [],
      orderItemQuantity: 1,
    },
  });

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
      <Draggable onDragDown={() => onClose()} styleClass={classes.foodModal}>
        <FoodModalNav
          loading={loading}
          onClick={onClose}
          name={data?.foodById?.name}
        />

        <FoodModalCloseButton onClick={onClose} />
        <FormProvider {...methods}>
          <form
            //onSubmit={methods.handleSubmit(onSubmit)}
            className={classes.foodModalForm}
            id="foodModal"
          >
            {loading || error ? (
              <Loader styleClass={classes.foodModalLoader} />
            ) : (
              <FoodModalBody data={data} showModal={showModal} />
            )}
          </form>
        </FormProvider>
      </Draggable>
    </ModalPopUp>
  );
};

export default FoodModal;
