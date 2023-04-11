import { extendType, nonNull } from 'nexus';

import { CheckoutCalculateInput, CreateOrderInput } from './OrderTypes';

export const CheckoutCalculateMut = extendType({
  type: `Mutation`,
  definition(t) {
    t.nonNull.field(`CheckoutCalculateMut`, {
      type: 'Checkout',
      args: {
        input: nonNull(CheckoutCalculateInput),
      },
      async resolve(_parent, args, ctx) {
        console.log(
          'process.env.STRIPE_SECRET_KEY',
          process.env.STRIPE_SECRET_KEY,
        );
        console.log('HERE', args.input);

        const foodIds = args.input.orders?.map((order) => order.foodId);
        const itemIds = [
          ...new Set(args.input.orders?.map((order) => order.itemIds)?.[0]),
        ] as string[];

        console.log('itemIds', itemIds);

        const foods = await ctx.prisma.food.findMany({
          where: {
            id: { in: foodIds },
          },
        });

        const items = await ctx.prisma.item.findMany({
          where: { id: { in: itemIds } },
        });

        // console.log('foods', foods);
        console.log('items', items);

        let total = 0;

        args.input.orders?.forEach((order) => {
          const food = foods.find((food) => food.id === order.foodId);
          total += (food?.price as number) * order.quantity;

          order.itemIds.forEach((itemId) => {
            const item = items.find((item) => item.id === itemId);

            total += (item?.price as number) * order.quantity;
          });
        });
        console.log('total', total);

        const paymentIntent = await ctx.stripe.paymentIntents.create({
          amount: 100,
          currency: 'eur',
        });

        console.log('paymentIntent', paymentIntent);

        return {
          total,
          clientSecret: paymentIntent.client_secret,
        };
      },
    });
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
