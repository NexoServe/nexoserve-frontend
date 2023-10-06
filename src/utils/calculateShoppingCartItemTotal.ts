import { OptionWithSizeType } from '../../generated/graphql';
import { FoodModalType } from '../state/FoodModalState';

const calculateShoppingCartItemTotal = (
  foodModal: FoodModalType,
  selectedOptions: OptionWithSizeType[] | OptionWithSizeType[],
) => {
  let foodPrice: number = foodModal.food?.price as number;

  if (foodModal.selectedSize) {
    foodPrice = foodModal.selectedSize.price ?? 0;
  }

  if (selectedOptions) {
    selectedOptions.forEach((selectedOption) => {
      const optionPrice =
        selectedOption.optionSize?.price || selectedOption.price || 0;
      foodPrice += optionPrice;
    });
  }

  return parseFloat((foodPrice * foodModal.quantity).toFixed(2));
};

export default calculateShoppingCartItemTotal;
