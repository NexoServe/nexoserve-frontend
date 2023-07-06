import { objectType } from 'nexus';

export const Restaurant = objectType({
  name: 'Restaurant',
  definition(t) {
    t.nonNull.string('name');
    t.nonNull.list.nonNull.field('openingHours', { type: 'DayOutput' });
    t.nonNull.list.nonNull.field('menu', { type: 'FoodsByCategory' });
    t.nonNull.string('currentDateTime');
    t.nonNull.string('timezone');
    t.nonNull.boolean('isOpenNow');
    t.nonNull.boolean('isOrderTimeValid');
  },
});
