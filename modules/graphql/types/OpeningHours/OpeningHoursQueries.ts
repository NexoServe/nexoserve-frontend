import { nonNull, queryField, stringArg } from 'nexus';

import isTimeValid from '../../../utils/isTimeValid';

export const validateOrderDetails = queryField('validateOrderDetails', {
  type: nonNull('validateOrderDetailsType'),
  args: {
    dateTime: stringArg(),
    timeLabel: stringArg(),
    restaurantId: nonNull(stringArg()),
  },
  async resolve(_, { dateTime, restaurantId }, ctx) {
    const restaurant = await ctx.prisma.restaurant.findUnique({
      where: {
        id: restaurantId,
      },
    });

    if (!restaurant) {
      throw new Error('Restaurant not found');
    }

    const openingHours = await ctx.prisma.openingHour.findMany({
      where: {
        restaurantId: restaurant?.id,
      },
    });

    return isTimeValid(openingHours, dateTime, restaurant.timezone);
  },
});
