import { inputObjectType, objectType } from 'nexus';

export const ValidateOrderDetailsType = objectType({
  name: 'ValidateOrderDetailsType',
  definition(t) {
    t.nonNull.string('address');
    t.nonNull.field('location', { type: 'Location' });
    t.nonNull.float('radius');
    t.nonNull.list.nonNull.field('openingHours', { type: 'DayOutput' });
    t.nonNull.list.nonNull.field('menu', { type: 'FoodsByCategory' });
    t.nonNull.string('currentDateTime');
    t.nonNull.string('timezone');
    t.nonNull.boolean('isOpenNow');
    t.nonNull.boolean('isOrderTimeValid');
    t.nonNull.boolean('isDeliveryAddressValid');
    t.string('deliveryAddress');
    t.string('deliveryAddressAdditionalInfo');
    t.string('deliveryDetails');
    t.nonNull.boolean('isPickUp');
  },
});

export const ValidateOrderDetailsInput = inputObjectType({
  name: 'ValidateOrderDetailsInput',
  definition(t) {
    t.nonNull.string('restaurantId');
    t.nonNull.string('orderTime');
    t.nonNull.boolean('isPickUp');
    t.string('deliveryAddress');
    t.string('deliveryAddressAdditionalInfo');
    t.string('deliveryDetails');
  },
});
