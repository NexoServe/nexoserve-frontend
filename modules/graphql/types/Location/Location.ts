import { inputObjectType, objectType } from 'nexus';

export const Location = objectType({
  name: `Location`,
  definition(t) {
    t.string(`id`);
    t.float(`latitude`);
    t.float(`longitude`);
  },
});

export const LocationInput = inputObjectType({
  name: 'LocationInput',
  definition(t) {
    t.float(`latitude`);
    t.float(`longitude`);
  },
});
