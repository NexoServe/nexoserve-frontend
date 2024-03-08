import { AnimatePresence, motion } from 'framer-motion';
import { useRecoilState, useRecoilValue } from 'recoil';

import { base } from '../../../../css/base';
import { OptionWithSizeType } from '../../../../generated/graphql';
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

  console.log('shoppingCart', shoppingCart);

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

  interface AddOnGrouped {
    addOnName: string;
    selectedOptionsWithoutSize: OptionWithSizeType[]; // Array for selectedOptions without optionSize
    optionSizeGroups: OptionSizeGrouped[]; // Renamed for clarity
  }

  // This map will store the first level of grouping by addOnName
  const addOnGroupMap = new Map<
    string,
    {
      optionSizeGroupMap: Map<string, OptionSizeGrouped>;
      selectedOptionsWithoutSize: OptionWithSizeType[];
      addOnName: string;
    }
  >();

  shoppingCartItem.selectedOptions?.forEach((selectedOption) => {
    const addOnName = selectedOption?.addOnName || '---'; // Use '---' for options without addOnName
    const optionSizeName = selectedOption?.optionSize?.name;

    // Retrieve or initialize the group for this addOnName
    let addOnGroup = addOnGroupMap.get(addOnName);
    if (!addOnGroup) {
      addOnGroup = {
        optionSizeGroupMap: new Map<string, OptionSizeGrouped>(),
        selectedOptionsWithoutSize: [],
        addOnName,
      };
      addOnGroupMap.set(addOnName, addOnGroup);
    }

    if (selectedOption) {
      if (optionSizeName) {
        // Handle options with optionSize
        let optionSizeGroup = addOnGroup.optionSizeGroupMap.get(optionSizeName);
        if (!optionSizeGroup) {
          optionSizeGroup = { optionSizeName, selectedOptions: [] };
          addOnGroup.optionSizeGroupMap.set(optionSizeName, optionSizeGroup);
        }
        optionSizeGroup.selectedOptions.push(selectedOption);
      } else {
        // Handle options without optionSize
        addOnGroup.selectedOptionsWithoutSize.push(selectedOption);
      }
    }
  });

  // Convert the grouped data into a more usable format
  const selectedOptionsGroupedByAddOn: AddOnGrouped[] = Array.from(
    addOnGroupMap.values(),
  )
    .map(({ optionSizeGroupMap, selectedOptionsWithoutSize, addOnName }) => ({
      addOnName,
      selectedOptionsWithoutSize,
      optionSizeGroups: Array.from(optionSizeGroupMap.values()).sort((a, b) =>
        a.optionSizeName.localeCompare(b.optionSizeName),
      ),
    }))
    .sort((a, b) => a.addOnName.localeCompare(b.addOnName));

  // Include the rest of your rendering code here, making sure to adjust how you render
  // both selectedOptionsWithoutSize and optionSizeGroups according to the new structure.

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
                  <>
                    <div className={classes.shoppingCartItemAddOn}>Size</div>
                    <div className={classes.shoppingCartItemDetailsItem}>
                      - {shoppingCartItem.selectedSize?.name}
                    </div>
                  </>
                ) : null}

                {selectedOptionsGroupedByAddOn.length > 0 &&
                  selectedOptionsGroupedByAddOn.map((group, i) => (
                    <div key={i}>
                      <div className={classes.shoppingCartItemAddOn}>
                        {group?.addOnName}
                      </div>

                      {group?.selectedOptionsWithoutSize.map(
                        (selectedOption) => (
                          <div
                            className={classes.shoppingCartItemDetailsItem}
                            key={selectedOption?.id}
                          >
                            - {selectedOption?.name}
                          </div>
                        ),
                      )}

                      {group?.optionSizeGroups.map((optionSizeGroup) => (
                        <>
                          <div
                            className={classes.shoppingCartItemDetailsItemSize}
                          >
                            {optionSizeGroup?.optionSizeName}
                          </div>

                          {optionSizeGroup?.selectedOptions?.map(
                            (selectedOption) => (
                              <div
                                className={
                                  classes.shoppingCartItemDetailsItemSizeItem
                                }
                                key={selectedOption?.id}
                              >
                                - {selectedOption?.name}
                              </div>
                            ),
                          )}
                        </>
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
