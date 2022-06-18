import { extendType, inputObjectType, nonNull, objectType } from 'nexus';
import { v4 as uuidv4 } from 'uuid';

export const OrderItem = objectType({
  name: `OrderItem`,
  definition(t) {
    t.string(`id`);
    t.float(`total`);
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
