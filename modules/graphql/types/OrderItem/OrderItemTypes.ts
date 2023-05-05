import { inputObjectType, objectType } from 'nexus';

export const OrderItem = objectType({
  name: `OrderItem`,
  definition(t) {
    t.string(`id`);
    t.field(`food`, {
      type: 'Food',
    });
    t.list.field(`items`, {
      type: 'Item',
    });
  },
});

export const CreateOrderItemInput = inputObjectType({
  name: 'CreateOrderItemInput',
  definition(t) {
    t.string('id');
    t.nonNull.string(`foodId`);
    t.nonNull.list.nonNull.string('items');
  },
});
