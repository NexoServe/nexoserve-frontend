import { SelectedItem } from '../../generated/graphql';
import { FoodModalType, SelectedItemType } from '../state/FoodModalState';

const calculateShoppingCartItemTotal = (
  foodModal: FoodModalType,
  selectedItems: SelectedItemType[] | SelectedItem[],
) => {
  let foodPrice: number = foodModal.food?.price as number;

  if (foodModal.selectedSize) {
    foodPrice = foodModal.selectedSize.price ?? 0;
  }

  if (selectedItems) {
    selectedItems.forEach((selectedItem) => {
      const itemPrice = selectedItem.itemSize?.price || selectedItem.price || 0;
      foodPrice += itemPrice;
    });
  }

  return parseFloat((foodPrice * foodModal.quantity).toFixed(2));
};

export default calculateShoppingCartItemTotal;
