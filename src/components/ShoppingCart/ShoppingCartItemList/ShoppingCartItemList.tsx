import { useEffect, useState } from 'react';

import Divider from '../../Divider/Divider';
import SvgIcons from '../../SvgIcons';
import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem';
import ShoppingCartShowDetailsBtn from '../ShoppingCartShowDetailsBtn/ShoppingCartShowDetailsBtn';

import useStyles from './css';

type ArrayType = {
  id: string;
  name: string;
  price: number;
};

const ShoppingCartItemList = () => {
  const [array, setArray] = useState<ArrayType[]>([]);

  const classes = useStyles();

  useEffect(() => {
    setArray([
      {
        id: '123',
        name: 'hey',
        price: 2,
      },
      {
        id: '1235',
        name: 'hey',
        price: 2,
      },
      {
        id: '1234',
        name: 'hey',
        price: 2,
      },
      {
        id: '1236',
        name: 'hey',
        price: 2,
      },
      {
        id: '1237',
        name: 'hey',
        price: 2,
      },
    ]);
  }, []);

  return (
    <div className={classes.shoppingCartItemList}>
      {array.length <= 0 ? (
        <div className={classes.shoppingCartItemListEmpty}>
          <SvgIcons name="emptyCart" />
          <p>
            Your cart is as empty as a bank account on the last day of the
            month.
          </p>
        </div>
      ) : (
        <>
          <ShoppingCartShowDetailsBtn
            styleClass={classes.shoppingCartItemListShowDetails}
          />
          {array.map((shoppingCartItem) => (
            <>
              <ShoppingCartItem key={shoppingCartItem.id} />
              <Divider />
            </>
          ))}
        </>
      )}
    </div>
  );
};

export default ShoppingCartItemList;
