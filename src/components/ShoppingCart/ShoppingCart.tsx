import React, { useMemo } from 'react';

import Link from 'next/link';
import { useRecoilValue } from 'recoil';

import { ShoppingCartAtom } from '../../state/ShoppingCartState';

const ShoppingCart = () => {
  const cart = useRecoilValue(ShoppingCartAtom);

  const total = useMemo(() => {
    let tot = 0;

    cart.forEach((c) => {
      tot += c?.food?.price * c?.orderItemQuantity;

      c?.foodItems.map((foodItem) => {
        tot += foodItem?.price * c?.orderItemQuantity;
      });
    });

    return tot;
  }, [cart]);

  console.log('total', total);

  return (
    <div>
      <h2>ShoppingCart</h2>
      {cart.map((obj) => (
        <div key={obj?.orderItemId}>
          <h4 style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>{obj?.orderItemQuantity}</span>
            {obj?.food?.name}
            <span>${obj?.food?.price}</span>
          </h4>

          <div>
            {obj?.foodItems.map((foodItem) => (
              <div key={foodItem?.id}>
                <h5
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginRight: '2rem',
                  }}
                >
                  {foodItem?.name}
                  <span
                    style={{
                      marginLeft: '1rem',
                    }}
                  >
                    ${foodItem?.price}
                  </span>
                </h5>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div>Total: ${total} </div>
      <Link href="/checkout">
        <a>Checkout</a>
      </Link>
    </div>
  );
};

export default ShoppingCart;
