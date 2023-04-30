import classNames from 'classnames';

import ShoppingCarCheckoutButton from '../ShoppingCarCheckoutButton/ShoppingCartButton';
import ShoppingCartHeader from '../ShoppingCartHeader/ShoppingCartHeader';
import ShoppingCartItemList from '../ShoppingCartItemList/ShoppingCartItemList';

import useStyles from './css';
import { IShoppingCart } from './types';

const ShoppingCart = ({ styleClass }: IShoppingCart) => {
  // const [shoppingCart, setShoppingCart] = useRecoilState(ShoppingCartAtom);

  // const shoppingCartData = useMemo(() => {
  //   return shoppingCart.map((item) => {
  //     return {
  //       orderItemId: item?.orderItemId,
  //       foodId: item?.food?.id as string,
  //       foodSizeId: item?.selectedSize?.id,
  //       items: item?.selectedItems?.map((selectedItem) => {
  //         return {
  //           itemId: selectedItem.id as string,
  //           itemSizeId: selectedItem?.itemSize?.id,
  //         };
  //       }),
  //       quantity: item?.quantity,
  //     };
  //   });
  // }, [shoppingCart]);

  // const [fetchValidateShoppingCart, { data }] =
  //   useValidateShoppingCartLazyQuery();

  // useEffect(() => {
  //   if (shoppingCartData.length > 0) {
  //     async function fetchData() {
  //       setTimeout(async () => {
  //         console.log('HERERE');
  //         await fetchValidateShoppingCart({
  //           variables: {
  //             input: shoppingCartData,
  //           },
  //         });
  //       }, 2000);
  //     }

  //     fetchData();
  //   }
  // }, [shoppingCartData]);

  // console.log('data', data);

  const classes = useStyles();
  // const controls = useDragControls();

  return (
    <div className={classNames(styleClass, classes.shoppingCart)}>
      <div className={classes.shoppingCartInner}>
        <ShoppingCartHeader />
        <ShoppingCartItemList />
        <ShoppingCarCheckoutButton />
      </div>
    </div>
  );
};

export default ShoppingCart;
