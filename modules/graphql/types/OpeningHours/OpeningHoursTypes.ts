import { inputObjectType, objectType } from 'nexus';

export const OpeningHour = objectType({
  name: 'OpeningHour',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('dayOfWeek');
    t.nonNull.string('openTime');
    t.nonNull.string('closeTime');
    t.nonNull.int('restaurantId');
  },
});

export const TimeOutput = objectType({
  name: 'TimeOutput',
  definition(t) {
    t.string('opens_at');
    t.string('closes_at');
  },
});

export const DayOutput = objectType({
  name: 'DayOutput',
  definition(t) {
    t.nonNull.string('dayOfWeek');
    t.nonNull.list.nonNull.field('time', { type: 'TimeOutput' });
  },
});

export const TimeInput = inputObjectType({
  name: 'TimeInput',
  definition(t) {
    t.string('opens_at');
    t.string('closes_at');
  },
});

export const DayInput = inputObjectType({
  name: 'DayInput',
  definition(t) {
    t.nonNull.string('dayOfWeek');
    t.nonNull.list.nonNull.field('time', { type: 'TimeInput' });
  },
});
