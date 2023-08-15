import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { useRecoilState, useRecoilValue } from 'recoil';

import { base } from '../../../../css/base';
import { Maybe, SelectedItem } from '../../../../generated/graphql';
import {
  FoodModalAtom,
  FoodModalSelectedItemsAtom,
  FoodModalSelectedSizeAtom,
} from '../../../state/FoodModalState';
import {
  ShoppingCartAtom,
  ShoppingCartTotalAtom,
  ShowShoppingCartDetailsAtom,
} from '../../../state/ShoppingCartState';
import FoodModal from '../../Food/FoodModal/FoodModal';
import SvgIcons from '../../SvgIcons';

import useStyles from './css';
import { IShoppingCartItem, ItemSizeGrouped } from './types';

const ShoppingCartItem = ({ shoppingCartItem }: IShoppingCartItem) => {
  const [showUpdateFoodModal, setShowUpdateFoodModal] = useState(false);
  const showShoppingCartDetails = useRecoilValue(ShowShoppingCartDetailsAtom);

  const [, setFoodModal] = useRecoilState(FoodModalAtom);
  const [, setFoodModalSelectedSize] = useRecoilState(
    FoodModalSelectedSizeAtom,
  );
  const [, setFoodModalSelectedItems] = useRecoilState(
    FoodModalSelectedItemsAtom,
  );
  const [shoppingCart, setShoppingCart] = useRecoilState(ShoppingCartAtom);
  const [shoppingCartTotal, setShoppingCartTotal] = useRecoilState(
    ShoppingCartTotalAtom,
  );
  const classes = useStyles();

  const updateShoppingCartItem = () => {
    setFoodModal({
      food: shoppingCartItem?.food,
      selectedSize: shoppingCartItem?.selectedSize,
      quantity: shoppingCartItem?.quantity,
    });

    setFoodModalSelectedSize(shoppingCartItem?.selectedSize);

    setFoodModalSelectedItems(
      shoppingCartItem?.selectedItems?.map((item) => ({
        addOnName: item?.addOnName as string,
        id: item?.id,
        name: item?.name,
        price: item?.price,
        itemSize: item?.itemSize,
      })) || [],
    );

    setShowUpdateFoodModal(true);
  };

  const removeShoppingCartItem = () => {
    const newShoppingCart = shoppingCart.filter(
      (cartItem) => cartItem.orderItemId !== shoppingCartItem?.orderItemId,
    );

    localStorage.setItem('shoppingCartItems', JSON.stringify(newShoppingCart));

    setShoppingCart(newShoppingCart);
    setShoppingCartTotal({
      ...shoppingCartTotal,
      isValidated: false,
    });
  };

  const selectedItems: Maybe<SelectedItem>[] = [];

  const groupMap = new Map<string, ItemSizeGrouped>();

  shoppingCartItem.selectedItems?.forEach((selectedItem) => {
    const itemSizeName = selectedItem?.itemSize?.name;
    const existingGroup = groupMap.get(itemSizeName as string);

    if (!itemSizeName) {
      selectedItems.push(selectedItem);
      return;
    }

    if (existingGroup) {
      existingGroup.selectedItems.push(selectedItem);
    } else {
      groupMap.set(itemSizeName, {
        itemSizeName: itemSizeName,
        selectedItems: [selectedItem],
      });
    }
  });

  const selectedItemGroupedByItemSize = Array.from(groupMap.values()).sort(
    (a, b) => a.itemSizeName.localeCompare(b.itemSizeName),
  );

  return (
    <>
      <motion.div
        animate={{ rowGap: showShoppingCartDetails ? base(1) : 0 }}
        className={classes.shoppingCartItem}
        onClick={updateShoppingCartItem}
      >
        <div
          onClick={updateShoppingCartItem}
          className={classes.shoppingCartItemQuantity}
        >
          <span>{shoppingCartItem?.quantity}</span>
        </div>
        <div
          onClick={updateShoppingCartItem}
          className={classes.shoppingCartItemContent}
        >
          <h3 className={classes.shoppingCartItemTitle}>
            {shoppingCartItem?.food?.name}
          </h3>
          <div className={classes.shoppingCartItemPrice}>
            ${shoppingCartItem?.price.toFixed(2)}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {showShoppingCartDetails && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: '0', opacity: 0 }}
              className={classes.shoppingCartItemDetails}
            >
              <div onClick={updateShoppingCartItem}></div>
              <div
                onClick={updateShoppingCartItem}
                className={classes.shoppingCartItemDetailsInner}
              >
                {shoppingCartItem.selectedSize ? (
                  <div className={classes.shoppingCartItemDetailsItem}>
                    {shoppingCartItem.selectedSize?.name}
                  </div>
                ) : null}

                {selectedItems?.map((selectedItem) => (
                  <div
                    key={selectedItem?.id}
                    className={classes.shoppingCartItemDetailsItem}
                  >
                    {selectedItem?.name}
                  </div>
                ))}

                {selectedItemGroupedByItemSize.length > 0 &&
                  selectedItemGroupedByItemSize.map((group, i) => (
                    <div key={i}>
                      <div className={classes.shoppingCartItemDetailsItemSize}>
                        {group?.itemSizeName}
                      </div>

                      {group?.selectedItems?.map((selectedItem) => (
                        <div
                          className={
                            classes.shoppingCartItemDetailsItemSizeItem
                          }
                          key={selectedItem?.id}
                        >
                          {selectedItem?.name}
                        </div>
                      ))}
                    </div>
                  ))}
              </div>
              <div className={classes.shoppingCartItemDeleteButton}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeShoppingCartItem();
                  }}
                >
                  <SvgIcons name="closeFilled" />
                </button>
              </div>
              <div className={classes.shoppingCartItemEditButton}>
                <button onClick={updateShoppingCartItem}>Edit Item</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence mode="wait">
        {showUpdateFoodModal && (
          <FoodModal
            setShowModal={setShowUpdateFoodModal}
            showModal={showUpdateFoodModal}
            foodId={shoppingCartItem?.food?.id as string}
            type="update"
            orderItemId={shoppingCartItem?.orderItemId}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ShoppingCartItem;
