import { Fragment, useState } from 'react';

import { useRecoilValue } from 'recoil';

import { ShoppingCartItemType } from '../../../../generated/graphql';
import { ShoppingCartAtom } from '../../../state/ShoppingCartState';
import Divider from '../../Divider/Divider';
import FoodModal from '../../Food/FoodModal/FoodModal';
import SvgIcons from '../../SvgIcons';
import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem';
import ShoppingCartShowDetailsBtn from '../ShoppingCartShowDetailsBtn/ShoppingCartShowDetailsBtn';

import useStyles from './css';
import { IShoppingCartItemList } from './types';

const ShoppingCartItemList = ({ isCheckout, theme }: IShoppingCartItemList) => {
  const shoppingCart = useRecoilValue(ShoppingCartAtom);
  const [showModal, setShowModal] = useState(false);
  const [activeShoppingCartItem, setActiveActiveShoppingCartItem] =
    useState<ShoppingCartItemType>();

  const activeShoppingCartItemClick = (
    activeShoppingCartItem: ShoppingCartItemType,
  ) => {
    setShowModal(true);
    setActiveActiveShoppingCartItem(activeShoppingCartItem);
  };

  const classes = useStyles({
    theme,
  });

  return (
    <div className={classes.shoppingCartItemList}>
      {shoppingCart.length <= 0 && shoppingCart ? (
        <div className={classes.shoppingCartItemListEmpty}>
          <SvgIcons
            styleClass={classes.shoppingCartItemListEmptySvg}
            name="emptyCart"
            fill={theme.neutral}
            backgroundColor={theme.primary}
          />
          <p className={classes.shoppingCartItemListEmptyText}>
            Your cart is empty
          </p>
        </div>
      ) : (
        <>
          <ShoppingCartShowDetailsBtn
            styleClass={`${classes.shoppingCartItemListShowDetails} ${
              isCheckout && classes.shoppingCartItemListShowDetailsChecked
            }`}
            theme={theme}
          />
          {shoppingCart?.map((shoppingCartItem) => (
            <Fragment key={shoppingCartItem.orderItemId}>
              <ShoppingCartItem
                shoppingCartItem={shoppingCartItem}
                activeShoppingCartItemClick={activeShoppingCartItemClick}
                theme={theme}
              />
              <Divider theme={theme} />
            </Fragment>
          ))}
        </>
      )}

      {activeShoppingCartItem && (
        <FoodModal
          setShowModal={setShowModal}
          showModal={showModal}
          foodId={activeShoppingCartItem?.food?.id as string}
          type="update"
          orderItemId={activeShoppingCartItem?.orderItemId}
          customInstructionsText={
            activeShoppingCartItem?.customInstructions as string
          }
          theme={theme}
        />
      )}
    </div>
  );
};

export default ShoppingCartItemList;
