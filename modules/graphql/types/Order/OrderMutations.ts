import { extendType, list, nonNull, stringArg } from 'nexus';

import { NexusGenInputs } from '../../../../generated/nexus-typegen';
import calculateTotal from '../../../utils/calculateTotal';
import { getRestaurantAndMenu } from '../../../utils/getRestaurantAndMenu';
import { validateAddress } from '../../../utils/validateAddress';
import validateTime from '../../../utils/validateTime';
import { OrderDetailsInput } from '../OrderDetails';

import { CreateOrderInput, ShoppingCartInput } from './OrderTypes';

export const CheckoutCalculateMut = extendType({
  type: `Mutation`,
  definition(t) {
    t.nonNull.field(`CheckoutCalculateMut`, {
      type: 'Checkout',
      args: {
        shoppingCart: nonNull(list(ShoppingCartInput)),
        paymentMethodId: nonNull(stringArg()),
        orderDetails: nonNull(OrderDetailsInput),
      },
      async resolve(
        _parent,
        { shoppingCart, paymentMethodId, orderDetails },
        ctx,
      ) {
        const { restaurant } = await getRestaurantAndMenu(
          ctx,
          orderDetails.restaurantId,
        );

        if (!restaurant) {
          throw new Error('Restaurant not found');
        }

        const openingHours = await ctx.prisma.openingHour.findMany({
          where: {
            restaurantId: restaurant?.id,
          },
        });

        const validateOrderTime = validateTime(
          openingHours,
          orderDetails.orderTime as string,
          restaurant.timezone,
          orderDetails.isPickUp
            ? restaurant.pickUpOffset
            : restaurant.deliveryOffset,
        );

        if (!validateOrderTime.isOrderTimeValid) {
          throw new Error('Invalid order time');
        }

        const validateOrderAddress = await validateAddress(
          orderDetails.deliveryAddress as string,
          {
            lat: restaurant.location?.latitude as number,
            lng: restaurant.location?.longitude as number,
          },
          restaurant.radius,
        );

        if (!validateOrderAddress) {
          throw new Error('Invalid order address');
        }

        const result = await calculateTotal({
          ctx: ctx,
          input: shoppingCart as NexusGenInputs['ShoppingCartInput'][],
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
