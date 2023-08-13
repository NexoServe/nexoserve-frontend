import { inputObjectType, objectType } from 'nexus';

export const RestaurantType = objectType({
  name: 'RestaurantType',
  definition(t) {
    t.nonNull.string('name');
    t.nonNull.string('address');
    t.nonNull.field('location', { type: 'Location' });
    t.nonNull.float('radius');
    t.nonNull.string('timezone');
    t.nonNull.int('pickUpOffset');
    t.nonNull.int('deliveryOffset');
    t.nonNull.list.nonNull.field('openingHours', { type: 'DayOutput' });
    t.nonNull.list.nonNull.field('menu', { type: 'FoodsByCategory' });
  },
});

export const RestaurantOutput = objectType({
  name: 'RestaurantOutput',
  definition(t) {
    t.nonNull.field('restaurantDetails', { type: 'RestaurantType' });
    t.nonNull.field('orderDetails', { type: 'OrderDetailsType' });
  },
});

export const RestaurantInput = inputObjectType({
  name: 'RestaurantInput',
  definition(t) {
    t.nonNull.string('restaurantId');
    t.nonNull.string('orderTime');
    t.nonNull.boolean('isPickUp');
    t.string('deliveryAddress');
    t.string('deliveryAddressAdditionalInfo');
    t.string('deliveryDetails');
  },
});
