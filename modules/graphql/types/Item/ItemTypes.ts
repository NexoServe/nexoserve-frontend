import { inputObjectType, objectType } from 'nexus';

export const Item = objectType({
  name: `Item`,
  definition(t) {
    t.string(`id`);
    t.string(`name`);
    t.float(`price`);
    t.list.field('itemSizes', {
      type: 'ItemSize',
    });
    t.list.field('addOns', {
      type: 'AddOn',
    });
  },
});

export const CreateItemInput = inputObjectType({
  name: 'CreateItemInput',
  definition(t) {
    t.string(`id`);
    t.nonNull.string(`name`);
    t.nonNull.float(`price`);
    t.list.nonNull.field('itemSizes', {
      type: 'ItemSizeInput',
    });
  },
});
