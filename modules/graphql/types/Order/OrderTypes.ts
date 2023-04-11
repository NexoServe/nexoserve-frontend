import { inputObjectType, list, nonNull, objectType } from 'nexus';

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
