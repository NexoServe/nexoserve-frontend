import { useMemo } from 'react';

import { useRecoilState } from 'recoil';

import {
  FoodModalAddOnRequiredAtom,
  FoodModalAtom,
  FoodModalSelectedItemsAtom,
} from '../../../state/FoodModalState';
import Button from '../../Button/Button';
import SvgIcons from '../../SvgIcons';

import useStyles from './css';

const FoodModalFooter = () => {
  const [foodModal, setFoodModal] = useRecoilState(FoodModalAtom);
  const [selectedItems, setSelectedItems] = useRecoilState(
    FoodModalSelectedItemsAtom,
  );
  const [, setRequiredAddOn] = useRecoilState(FoodModalAddOnRequiredAtom);

  const classes = useStyles();

  const price = useMemo(() => {
    let foodPrice: number = foodModal.food?.price as number;

    if (foodModal.selectedSize) {
      foodPrice = foodModal.selectedSize.price as number;
    }

    if (selectedItems) {
      selectedItems.forEach((selectedItem) => {
        if (selectedItem?.itemSize) {
          foodPrice = foodPrice + (selectedItem.itemSize.price as number);
        } else {
          foodPrice = foodPrice + (selectedItem?.price as number);
        }
      });
    }

    return (foodPrice * foodModal.quantity).toFixed(2);
  }, [foodModal, selectedItems]);

  const decreaseQuantity = () => {
    if (foodModal.quantity > 1) {
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
        <input
          className={classes.foodModalFooterQuantity}
          type="number"
          value={foodModal.quantity}
          // {...methods.register('orderItemQuantity')}
          // value={orderItemQuantity}
        />
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
        Add (${price})
      </Button>
    </div>
  );
};

export default FoodModalFooter;
