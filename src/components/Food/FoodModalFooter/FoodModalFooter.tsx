import { useEffect } from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';

import {
  FoodModalAddOnRequiredAtom,
  FoodModalAtom,
  FoodModalPriceAtom,
  foodModalTotalSelector,
} from '../../../state/FoodModalState';
import Button from '../../Button/Button';
import SvgIcons from '../../SvgIcons';

import useStyles from './css';
import { IFoodModalFooter } from './types';

const FoodModalFooter = ({ type, theme }: IFoodModalFooter) => {
  const [foodModal, setFoodModal] = useRecoilState(FoodModalAtom);
  const [, setRequiredAddOn] = useRecoilState(FoodModalAddOnRequiredAtom);
  const [, setFoodModalPrice] = useRecoilState(FoodModalPriceAtom);

  const classes = useStyles({
    theme,
  });
  const total = useRecoilValue(foodModalTotalSelector);

  useEffect(() => {
    setFoodModalPrice(total || 0);
  }, [total, setFoodModalPrice]);

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
          <SvgIcons name="minus" fill={theme.primary} />
        </button>
        <div className={classes.foodModalFooterQuantity}>
          {foodModal.quantity}
        </div>
        <button
          type="button"
          className={classes.foodModalFooterButton}
          onClick={increaseQuantity}
        >
          <SvgIcons name="plus" fill={theme.primary} />
        </button>
      </div>

      <Button
        onClick={() => setRequiredAddOn(undefined)}
        styleClass={classes.foodModalFooterButton}
        type="submit"
        theme={theme}
      >
        {foodModal.quantity === 0
          ? 'Remove'
          : type === 'create'
          ? `Add ($${total?.toFixed(2)})`
          : `Update ($${total?.toFixed(2)})`}
      </Button>
    </div>
  );
};

export default FoodModalFooter;
