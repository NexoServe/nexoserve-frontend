import { AnimatePresence, motion } from 'framer-motion';
import { useRecoilState, useRecoilValue } from 'recoil';

import { base } from '../../../../css/base';
import { Maybe, OptionWithSizeType } from '../../../../generated/graphql';
import {
  FoodModalAtom,
  FoodModalCustomInstructionsAtom,
  FoodModalSelectedOptionsAtom,
  FoodModalSelectedSizeAtom,
} from '../../../state/FoodModalState';
import {
  ShoppingCartAtom,
  ShoppingCartTotalAtom,
  ShowShoppingCartDetailsAtom,
} from '../../../state/ShoppingCartState';
import SvgIcons from '../../SvgIcons';

import useStyles from './css';
import { IShoppingCartItem, OptionSizeGrouped } from './types';

const ShoppingCartItem = ({
  shoppingCartItem,
  activeShoppingCartItemClick,
  theme,
}: IShoppingCartItem) => {
  const showShoppingCartDetails = useRecoilValue(ShowShoppingCartDetailsAtom);

  const [, setFoodModal] = useRecoilState(FoodModalAtom);
  const [, setFoodModalSelectedSize] = useRecoilState(
    FoodModalSelectedSizeAtom,
  );
  const [, setFoodModalSelectedOptions] = useRecoilState(
    FoodModalSelectedOptionsAtom,
  );
  const [, setCustomInstructions] = useRecoilState(
    FoodModalCustomInstructionsAtom,
  );
  const [shoppingCart, setShoppingCart] = useRecoilState(ShoppingCartAtom);
  const [shoppingCartTotal, setShoppingCartTotal] = useRecoilState(
    ShoppingCartTotalAtom,
  );
  const classes = useStyles({
    theme,
  });

  const updateShoppingCartItem = () => {
    activeShoppingCartItemClick(shoppingCartItem);
    setFoodModal({
      food: shoppingCartItem?.food,
      selectedSize: shoppingCartItem?.selectedSize,
      quantity: shoppingCartItem?.quantity,
    });

    setFoodModalSelectedSize(shoppingCartItem?.selectedSize);

    setFoodModalSelectedOptions(
      shoppingCartItem?.selectedOptions?.map((option) => ({
        id: option?.id as string,
        addOnName: option?.addOnName as string,
        name: option?.name as string,
        price: option?.price,
        optionSize: option?.optionSize,
      })) || [],
    );

    setCustomInstructions(shoppingCartItem?.customInstructions as string);
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

  const selectedOptions: Maybe<OptionWithSizeType>[] = [];

  const groupMap = new Map<string, OptionSizeGrouped>();

  shoppingCartItem.selectedOptions?.forEach((selectedOption) => {
    const optionSizeName = selectedOption?.optionSize?.name;
    const existingGroup = groupMap.get(optionSizeName as string);

    if (!optionSizeName) {
      selectedOptions.push(selectedOption);
      return;
    }

    if (existingGroup) {
      existingGroup.selectedOptions.push(selectedOption);
    } else {
      groupMap.set(optionSizeName, {
        optionSizeName: optionSizeName,
        selectedOptions: [selectedOption],
      });
    }
  });

  const selectedOptionGroupedByOptionSize = Array.from(groupMap.values()).sort(
    (a, b) => a.optionSizeName.localeCompare(b.optionSizeName),
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

                {selectedOptions?.map((selectedOption) => (
                  <div
                    key={selectedOption?.id}
                    className={classes.shoppingCartItemDetailsItem}
                  >
                    {selectedOption?.name}
                  </div>
                ))}

                {selectedOptionGroupedByOptionSize.length > 0 &&
                  selectedOptionGroupedByOptionSize.map((group, i) => (
                    <div key={i}>
                      <div className={classes.shoppingCartItemDetailsItemSize}>
                        {group?.optionSizeName}
                      </div>

                      {group?.selectedOptions?.map((selectedOption) => (
                        <div
                          className={
                            classes.shoppingCartItemDetailsItemSizeItem
                          }
                          key={selectedOption?.id}
                        >
                          {selectedOption?.name}
                        </div>
                      ))}
                    </div>
                  ))}

                {shoppingCartItem.customInstructions && (
                  <div
                    style={{
                      color: theme.primary,
                    }}
                  >
                    {shoppingCartItem.customInstructions}
                  </div>
                )}
              </div>
              <div className={classes.shoppingCartItemDeleteButton}>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeShoppingCartItem();
                  }}
                >
                  <SvgIcons name="closeFilled" fill={theme.primary} />
                </button>
              </div>
              <div className={classes.shoppingCartItemEditButton}>
                <button onClick={updateShoppingCartItem}>Edit Item</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default ShoppingCartItem;
