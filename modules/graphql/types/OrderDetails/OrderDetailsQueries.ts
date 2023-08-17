import { nonNull, queryField } from 'nexus';

import { getRestaurantAndMenu } from '../../../utils/getRestaurantAndMenu';
import { validateAddress } from '../../../utils/validateAddress';
import validateTime from '../../../utils/validateTime';

import { OrderDetailsInput } from './OrderDetailsTypes';

export const validateOrderDetails = queryField('validateOrderDetails', {
  type: nonNull('ValidateOrderDetailsOutput'),
  args: {
    input: nonNull(OrderDetailsInput),
  },
  async resolve(_, { input }, ctx) {
    const { restaurant, menu } = await getRestaurantAndMenu(
      ctx,
      input.restaurantId,
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
      input.orderTime as string,
      restaurant.timezone,
      input.isPickUp ? restaurant.pickUpOffset : restaurant.deliveryOffset,
    );

    const validateOrderAddress = await validateAddress(
      input.deliveryAddress as string,
      {
        lat: restaurant.location?.latitude as number,
        lng: restaurant.location?.longitude as number,
      },
      restaurant.radius,
    );

    return {
      restaurantDetails: {
        name: restaurant.name,
        address: restaurant.address,
        location: {
          latitude: restaurant.location?.latitude as number,
          longitude: restaurant.location?.longitude as number,
        },
        pickUpOffset: restaurant.pickUpOffset,
        deliveryOffset: restaurant.deliveryOffset,
        radius: restaurant.radius,
        openingHours: validateOrderTime.openingHoursByDay,
        menu: menu,
        timezone: restaurant.timezone,
      },
      orderDetails: {
        currentDateTime: validateOrderTime.currentDateTime,
        isOpenNow: validateOrderTime.isOpenNow,
        isOrderTimeValid: validateOrderTime.isOrderTimeValid,
        isDeliveryAddressValid: validateOrderAddress,
        isPickUp: input.isPickUp,
        deliveryAddress: validateOrderAddress ? input.deliveryAddress : null,
        deliveryAddressAdditionalInfo: validateOrderAddress
          ? input.deliveryAddressAdditionalInfo
          : null,
        deliveryDetails: validateOrderAddress ? input.deliveryDetails : null,
      },
    };
  },
});
