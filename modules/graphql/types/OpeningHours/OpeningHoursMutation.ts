import { arg, list, mutationField, nonNull, stringArg } from 'nexus';

export const AddOpeningHoursMutation = mutationField('addOpeningHours', {
  type: 'Boolean',
  args: {
    restaurantId: nonNull(stringArg()),
    openingHours: nonNull(list(nonNull(arg({ type: 'DayInput' })))),
  },
  async resolve(_, { restaurantId, openingHours }, ctx) {
    console.log('openingHours', openingHours);
    // const newOpeningHours = openingHours.flatMap((hours) =>
    //   hours.time.map((time) => ({
    //     dayOfWeek: hours.dayOfWeek,
    //     openTime: time.opens_at,
    //     closeTime: time.closes_at,
    //     restaurantId,
    //   })),
    // );

    const restaurant = await ctx.prisma.restaurant.findUnique({
      where: { id: restaurantId },
    });

    if (!restaurant) {
      throw new Error('Restaurant not found');
    }

    // await ctx.prisma.openingHour.deleteMany({});

    // const createdOpeningHours = await ctx.prisma.openingHour.createMany({
    //   data: newOpeningHours,
    // });

    return true;
  },
});
