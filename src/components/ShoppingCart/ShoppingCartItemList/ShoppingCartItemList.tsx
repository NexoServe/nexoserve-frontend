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

const ShoppingCartItemList = ({ isCheckout }: IShoppingCartItemList) => {
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

  const classes = useStyles();

  return (
    <div className={classes.shoppingCartItemList}>
      {shoppingCart.length <= 0 && shoppingCart ? (
        <div className={classes.shoppingCartItemListEmpty}>
          <SvgIcons
            styleClass={classes.shoppingCartItemListEmptySvg}
            name="emptyCart"
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
          />
          {shoppingCart?.map((shoppingCartItem) => (
            <Fragment key={shoppingCartItem.orderItemId}>
              <ShoppingCartItem
                shoppingCartItem={shoppingCartItem}
                activeShoppingCartItemClick={activeShoppingCartItemClick}
              />
              <Divider />
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
        />
      )}
    </div>
  );
};

export default ShoppingCartItemList;
