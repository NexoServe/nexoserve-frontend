import { inputObjectType, list, nonNull, objectType } from 'nexus';

export const SelectedItem = objectType({
  name: `SelectedItem`,
  definition(t) {
    t.nonNull.string(`id`);
    t.string(`name`);
    t.float(`price`);
    t.nonNull.string('addOnName');
    t.field(`itemSize`, {
      type: 'ItemSize',
    });
  },
});

export const ShoppingCartItem = objectType({
  name: `ShoppingCartItem`,
  definition(t) {
    t.nonNull.string(`orderItemId`);
    t.field(`food`, {
      type: 'SimpleFood',
    });
    t.field(`selectedSize`, {
      type: 'FoodSize',
    });
    t.list.field(`selectedItems`, {
      type: 'SelectedItem',
    });
    t.nonNull.float(`price`);
    t.nonNull.int(`quantity`);
    t.nonNull.string(`orderItemId`);
  },
});

export const ShoppingCart = objectType({
  name: `ShoppingCart`,
  definition(t) {
    t.nonNull.float('subTotal');
    t.float('tax');
    t.float('tip');
    t.float('grandTotal');
    t.nonNull.list.field(`shoppingCartItems`, {
      type: 'ShoppingCartItem',
    });
  },
});

export const ShoppingCartItemInput = inputObjectType({
  name: 'ShoppingCartItemInput',
  definition(t) {
    t.nonNull.string('itemId');
    t.string('itemSizeId');
    t.nonNull.string('addOnName');
  },
});

export const ShoppingCartInput = inputObjectType({
  name: 'ShoppingCartInput',
  definition(t) {
    t.nonNull.string(`orderItemId`);
    t.nonNull.string('foodId');
    t.string('foodSizeId');
    t.nonNull.list.field('items', { type: ShoppingCartItemInput });
    t.nonNull.int('quantity');
    t.float('tip');
    t.boolean('isTipPercentage');
  },
});

export const Order = objectType({
  name: `Order`,
  definition(t) {
    t.string(`id`);
    t.float(`total`);
    t.list.field(`orderItems`, {
      type: 'OrderItem',
    });
  },
});

export const Checkout = objectType({
  name: `Checkout`,
  definition(t) {
    t.string(`id`);
    t.float(`total`);
    t.string('clientSecret');
  },
});

export const CreateOrderInput = inputObjectType({
  name: 'CreateOrderInput',
  definition(t) {
    t.string('id');
    t.nonNull.string('foodId');
    t.nonNull.list.string('itemIds');
    t.nonNull.int('quantity');
  },
});

export const CheckoutCalculateInput = inputObjectType({
  name: 'CheckoutCalculateInput',
  definition(t) {
    t.string('id');
    t.field('orders', { type: list(nonNull(CreateOrderInput)) });
  },
});
