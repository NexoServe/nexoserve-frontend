import { FoodModalType, SelectedItemType } from '../state/FoodModalState';

const calculateShoppingCartItemTotal = (
  foodModal: FoodModalType,
  selectedItems: SelectedItemType[],
) => {
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
};

export default calculateShoppingCartItemTotal;
