import { useState } from 'react';

import { motion } from 'framer-motion';
import { useRecoilState, useRecoilValue } from 'recoil';

import { base } from '../../../../css/base';
import {
  FoodModalAtom,
  FoodModalSelectedItemsAtom,
} from '../../../state/FoodModalState';
import { ShowShoppingCartDetailsAtom } from '../../../state/ShoppingCartState';
import FoodModal from '../../Food/FoodModal/FoodModal';
import SvgIcons from '../../SvgIcons';

import useStyles from './css';
import { IShoppingCartItem } from './types';

const ShoppingCartItem = ({ shoppingCartItem }: IShoppingCartItem) => {
  const [showUpdateFoodModal, setShowUpdateFoodModal] = useState(false);
  const showShoppingCartDetails = useRecoilValue(ShowShoppingCartDetailsAtom);

  const [, setFoodModal] = useRecoilState(FoodModalAtom);
  const [, setFoodModalSelectedItems] = useRecoilState(
    FoodModalSelectedItemsAtom,
  );
  const classes = useStyles();

  const updateShoppingCartItem = () => {
    setFoodModal({
      food: shoppingCartItem?.food,
      selectedSize: shoppingCartItem?.selectedSize,
      quantity: shoppingCartItem?.quantity,
    });

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

  return (
    <>
      <motion.button
        animate={{ rowGap: showShoppingCartDetails ? base(1) : 0 }}
        className={classes.shoppingCartItem}
        onClick={updateShoppingCartItem}
      >
        <div className={classes.shoppingCartItemQuantity}>
          <span>{shoppingCartItem?.quantity}</span>
        </div>
        <div className={classes.shoppingCartItemContent}>
          <h3 className={classes.shoppingCartItemTitle}>
            {shoppingCartItem?.food?.name}
          </h3>
          <div className={classes.shoppingCartItemPrice}>
            ${shoppingCartItem?.price.toFixed(2)}
          </div>
        </div>

        <motion.div
          animate={{
            height: showShoppingCartDetails ? '100%' : '0',
            opacity: showShoppingCartDetails ? 1 : 0,
            pointerEvents: showShoppingCartDetails ? 'all' : 'none',
          }}
          className={classes.shoppingCartItemDetails}
        >
          <div className={classes.shoppingCartItemDetailsInner}>
            {shoppingCartItem.selectedSize ? (
              <div className={classes.shoppingCartItemDetailsItem}>
                {shoppingCartItem.selectedSize?.name}
              </div>
            ) : null}

            {shoppingCartItem?.selectedItems?.map((selectedItem) => (
              <div
                key={selectedItem?.id}
                className={classes.shoppingCartItemDetailsItem}
              >
                {/* <span>2</span> */}
                {selectedItem?.name}
              </div>
            ))}
          </div>
          <div className={classes.shoppingCartItemDeleteButton}>
            <button onClick={() => console.log('HERE')}>
              <SvgIcons name="closeFilled" />
            </button>
          </div>
          <div className={classes.shoppingCartItemEditButton}>
            <button>Edit Item</button>
          </div>
        </motion.div>
      </motion.button>

      <FoodModal
        setShowModal={setShowUpdateFoodModal}
        showModal={showUpdateFoodModal}
        foodId={shoppingCartItem?.food?.id as string}
        type="update"
        orderItemId={shoppingCartItem?.orderItemId}
      />
    </>
  );
};

export default ShoppingCartItem;
