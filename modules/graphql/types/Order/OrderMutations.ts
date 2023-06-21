import { extendType, list, nonNull, stringArg } from 'nexus';

import { NexusGenInputs } from '../../../../generated/nexus-typegen';
import calculateTotal from '../../../utils/calculateTotal';

import { CreateOrderInput, ShoppingCartInput } from './OrderTypes';

export const CheckoutCalculateMut = extendType({
  type: `Mutation`,
  definition(t) {
    t.nonNull.field(`CheckoutCalculateMut`, {
      type: 'Checkout',
      args: {
        input: nonNull(list(ShoppingCartInput)),
        paymentMethodId: nonNull(stringArg()),
      },
      async resolve(_parent, { input, paymentMethodId }, ctx) {
        const result = await calculateTotal({
          ctx: ctx,
          input: input as NexusGenInputs['ShoppingCartInput'][],
        });

        const paymentIntent = await ctx.stripe.paymentIntents.create({
          confirm: true,
          amount: parseInt((result.grandTotal * 100).toFixed(0)),
          currency: 'usd',
          payment_method_types: ['card', 'cashapp'],
          payment_method: paymentMethodId, // the PaymentMethod ID sent by your client
          return_url: 'https://localhost:3000',
          use_stripe_sdk: true,
          capture_method: 'manual',
        });

        return {
          total: result.grandTotal,
          clientSecret: paymentIntent.client_secret,
          status: paymentIntent.status,
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
