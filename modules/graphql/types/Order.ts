import { extendType, inputObjectType, nonNull, objectType } from 'nexus';
import { v4 as uuidv4 } from 'uuid';

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

export const CreateOrderInput = inputObjectType({
  name: 'CreateOrderInput',
  definition(t) {
    t.string('id');
    t.float(`total`);
    t.nonNull.list.string('itemIds');
  },
});

export const CreateOrderMutation = extendType({
  type: `Mutation`,
  definition(t) {
    t.nonNull.field(`createOrder`, {
      type: 'Order',
      args: {
        input: nonNull(CreateOrderInput),
      },
      async resolve(_parent, args, ctx) {
        return {};
        // return await ctx.prisma.order.create({
        //   data: {},
        // });
      },
    });
  },
});
