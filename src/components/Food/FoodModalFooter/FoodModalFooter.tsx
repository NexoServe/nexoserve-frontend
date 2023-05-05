import { useEffect } from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';

import {
  FoodModalAddOnRequiredAtom,
  FoodModalAtom,
  FoodModalPriceAtom,
  FoodModalSelectedItemsAtom,
} from '../../../state/FoodModalState';
import calculateShoppingCartItemTotal from '../../../utils/calculateShoppingCartItemTotal';
import Button from '../../Button/Button';
import SvgIcons from '../../SvgIcons';

import useStyles from './css';
import { IFoodModalFooter } from './types';

const FoodModalFooter = ({ type }: IFoodModalFooter) => {
  const [foodModal, setFoodModal] = useRecoilState(FoodModalAtom);
  const selectedItems = useRecoilValue(FoodModalSelectedItemsAtom);
  const [, setRequiredAddOn] = useRecoilState(FoodModalAddOnRequiredAtom);
  const [foodModalPrice, setFoodModalPrice] =
    useRecoilState(FoodModalPriceAtom);

  const classes = useStyles();

  useEffect(() => {
    const total = calculateShoppingCartItemTotal(foodModal, selectedItems);
    setFoodModalPrice(parseFloat(total));
  }, [foodModal, selectedItems]);

  const decreaseQuantity = () => {
    if (foodModal.quantity > (type === 'create' ? 1 : 0)) {
      setFoodModal({ ...foodModal, quantity: foodModal.quantity - 1 });
    }
  };

  const increaseQuantity = () => {
    setFoodModal({ ...foodModal, quantity: foodModal.quantity + 1 });
  };

  return (
    <div className={classes.foodModalFooter}>
      <div className={classes.foodModalFooterQuantityContainer}>
        <button
          className={classes.foodModalFooterButton}
          type="button"
          onClick={decreaseQuantity}
        >
          <SvgIcons name="minus" />
        </button>
        <div className={classes.foodModalFooterQuantity}>
          {foodModal.quantity}
        </div>
        <button
          type="button"
          className={classes.foodModalFooterButton}
          onClick={increaseQuantity}
        >
          <SvgIcons name="plus" />
        </button>
      </div>

      <Button
        onClick={() => setRequiredAddOn(undefined)}
        styleClass={classes.foodModalFooterButton}
        type="submit"
      >
        {foodModal.quantity === 0
          ? 'Remove'
          : type === 'create'
          ? `Add ($${foodModalPrice.toFixed(2)})`
          : `Update ($${foodModalPrice.toFixed(2)})`}
      </Button>
    </div>
  );
};

export default FoodModalFooter;
