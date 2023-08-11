import { DateTime } from 'luxon';
import { nonNull, queryField } from 'nexus';
import { LatLng } from 'use-places-autocomplete';

import getOpeningHoursByDay from '../../../../src/utils/getOpeningHoursByDay';
import { isValidAddress } from '../../../utils/isAddressValid';
import isStoreOpen from '../../../utils/isStoreOpen';
import isTimeValid from '../../../utils/isTimeValid';

import { RestaurantInput } from './RestaurantTypes';

export const RestaurantQuery = queryField('restaurant', {
  type: nonNull('Restaurant'),
  args: {
    input: nonNull(RestaurantInput),
  },
  async resolve(_, { input }, ctx) {
    const restaurant = await ctx.prisma.restaurant.findUnique({
      where: {
        id: input.restaurantId,
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

    const isOrderTimeValid = isTimeValid(
      openingHours,
      input.orderTime as string,
      restaurant.timezone,
    );

    const latLng: LatLng = {
      lat: 42.64959,
      lng: -73.807041,
    };

    const isAdressValid = await isValidAddress(
      input.deliveryAddress as string,
      latLng,
    );

    console.log('isAdressValid', isAdressValid);

    return {
      name: restaurant.name,
      menu: menu,
      openingHours: openingHoursByDay,
      currentDateTime: timeZonedTime.toString(),
      timezone: restaurant.timezone,
      isOpenNow,
      isOrderTimeValid: isOrderTimeValid.isOrderTimeValid,
      isDeliveryAddressValid: isAdressValid,
      isPickUp: input.isPickUp,
      deliveryAddress: isAdressValid ? input.deliveryAddress : null,
      deliveryAddressAdditionalInfo: isAdressValid
        ? input.deliveryAddressAdditionalInfo
        : null,
      deliveryDetails: isAdressValid ? input.deliveryDetails : null,
    };
  },
});
