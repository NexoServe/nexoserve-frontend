import { inputObjectType, objectType } from 'nexus';

export const ItemSize = objectType({
  name: `ItemSize`,
  definition(t) {
    t.string(`id`);
    t.string(`name`);
    t.float(`price`);
    t.boolean('default');
  },
});

export const ItemSizeInput = inputObjectType({
  name: 'ItemSizeInput',
  definition(t) {
    t.string(`id`);
    t.nonNull.string(`name`);
    t.nonNull.float(`price`);
    t.boolean('default');
  },
});
