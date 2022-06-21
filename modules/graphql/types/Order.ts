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
    t.nonNull.string('foodId');
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
        console.log('HERE', args.input);
        let total = 0;

        const food = await ctx.prisma.food.findUnique({
          where: {
            id: args.input.foodId,
          },
        });

        total += food?.price || 0;

        console.log('total', total);
        const items = await ctx.prisma.item.findMany({
          where: {
            id: {
              in: args.input.itemIds as string[],
            },
          },
        });

        items.map((item) => {
          total += item.price;
        });

        console.log('items', items);

        console.log('food', food);

        console.log('final total', total);

        return {};
        // return await ctx.prisma.order.create({
        //   data: {},
        // });
      },
    });
  },
});
