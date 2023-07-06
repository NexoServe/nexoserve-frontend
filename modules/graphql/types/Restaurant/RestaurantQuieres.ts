import { DateTime } from 'luxon';
import { nonNull, queryField, stringArg } from 'nexus';

import getOpeningHoursByDay from '../../../../src/utils/getOpeningHoursByDay';
import isStoreOpen from '../../../utils/isStoreOpen';
import isTimeValid from '../../../utils/isTimeValid';

export const RestaurantQuery = queryField('restaurant', {
  type: nonNull('Restaurant'),
  args: {
    restaurantId: nonNull(stringArg()),
    orderTime: stringArg(),
  },
  async resolve(_, { restaurantId, orderTime }, ctx) {
    const restaurant = await ctx.prisma.restaurant.findUnique({
      where: {
        id: restaurantId,
      },
    });

    if (!restaurant) {
      throw new Error('Restaurant not found');
    }

    const foodsByCategory = await ctx.prisma.foodCategory.findMany({
      include: {
        foods: {
          include: {
            sizes: true,
          },
        },
      },
      where: {
        foods: {
          some: {
            restaurantId: restaurant?.id,
          },
        },
      },
    });

    const menu = foodsByCategory.map((foodByCategory) => ({
      category: foodByCategory.name,
      foods: foodByCategory.foods.map((food) => {
        return {
          id: food.id,
          name: food.name,
          description: food.description,
          image: food.image,
          price: food.price,
          sizes: food.sizes,
        };
      }),
    }));

    const openingHours = await ctx.prisma.openingHour.findMany({
      where: {
        restaurantId: restaurant?.id,
      },
    });

    const openingHoursByDay = getOpeningHoursByDay(openingHours);

    const nowUTC = DateTime.utc();
    const timeZonedTime = nowUTC.setZone(restaurant.timezone);
    // const timeZonedTime = DateTime.fromISO(
    //   '2023-07-06T22:50:15.381-04:00',
    // ).setZone(restaurant.timezone);

    const isOpenNow = isStoreOpen(
      openingHoursByDay,
      timeZonedTime,
      restaurant.timezone,
    );

    console.log('timeZonedTime', timeZonedTime.toString());
    console.log('orderTime', orderTime);

    const isOrderTimeValid = isTimeValid(
      openingHours,
      orderTime as string,
      restaurant.timezone,
    );

    console.log('isOrderTimeValid', isOrderTimeValid);

    return {
      name: restaurant.name,
      menu: menu,
      openingHours: openingHoursByDay,
      currentDateTime: timeZonedTime.toString(),
      timezone: restaurant.timezone,
      isOpenNow,
      isOrderTimeValid: isOrderTimeValid.isDateTimeValid,
    };
  },
});
