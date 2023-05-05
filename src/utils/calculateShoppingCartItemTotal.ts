import { SelectedItem } from '../../generated/graphql';
import { FoodModalType, SelectedItemType } from '../state/FoodModalState';

const calculateShoppingCartItemTotal = (
  foodModal: FoodModalType,
  selectedItems: SelectedItemType[] | SelectedItem[],
) => {
  let foodPrice: number = foodModal.food?.price as number;

  console.log('foodModal');
  console.log('selectedItems', selectedItems);

  if (foodModal.selectedSize) {
    foodPrice = foodModal.selectedSize.price ?? 0;
  }

  if (selectedItems) {
    selectedItems.forEach((selectedItem) => {
      const itemPrice = selectedItem.itemSize?.price || selectedItem.price || 0;
      foodPrice += itemPrice;
    });
  }

  return (foodPrice * foodModal.quantity).toFixed(2);
};

export default calculateShoppingCartItemTotal;
