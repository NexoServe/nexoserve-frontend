import { inputObjectType, objectType } from 'nexus';

export const OrderDetailsType = objectType({
  name: 'OrderDetailsType',
  definition(t) {
    t.nonNull.string('currentDateTime');
    t.nonNull.boolean('isOpenNow');
    t.nonNull.boolean('isOrderTimeValid');
    t.nonNull.boolean('isDeliveryAddressValid');
    t.string('deliveryAddress');
    t.string('deliveryAddressAdditionalInfo');
    t.string('deliveryDetails');
    t.nonNull.boolean('isPickUp');
  },
});

export const ValidateOrderDetailsOutput = objectType({
  name: 'ValidateOrderDetailsOutput',
  definition(t) {
    t.nonNull.field('restaurantDetails', { type: 'RestaurantType' });
    t.nonNull.field('orderDetails', { type: 'OrderDetailsType' });
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
