import { inputObjectType, objectType } from 'nexus';

export const ItemSizePortion = objectType({
  name: `ItemSizePortion`,
  definition(t) {
    t.string(`id`);
    t.string(`name`);
    t.float(`price`);
    t.boolean('default');
  },
});

export const ItemSizePortionInput = inputObjectType({
  name: 'ItemSizePortionInput',
  definition(t) {
    t.string(`id`);
    t.nonNull.string(`name`);
    t.nonNull.float(`price`);
    t.boolean('default');
  },
});
