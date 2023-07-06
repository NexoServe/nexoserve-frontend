import { mutationField, nonNull, stringArg } from 'nexus';

export const CreateRestaurant = mutationField('createRestaurant', {
  type: 'Boolean',
  args: {
    restaurantId: nonNull(stringArg()),
    name: nonNull(stringArg()),
    timezone: nonNull(stringArg()),
  },
  async resolve(_, { restaurantId, name, timezone }, ctx) {
    const validTimezones = ['America/New_York', 'America/Los_Angeles'];

    if (!validTimezones.includes(timezone)) {
      throw 'Invalid timezone';
    }

    await ctx.prisma.restaurant.create({
      data: {
        name,
        id: restaurantId,
        timezone: timezone,
      },
    });

    return true;
  },
});
