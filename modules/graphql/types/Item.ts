import { extendType, inputObjectType, objectType } from 'nexus';

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

export const ItemQuery = extendType({
  type: `Query`,
  definition(t) {
    t.nonNull.list.field(`items`, {
      type: `Item`,
      resolve(_parent, _args, ctx) {
        return ctx.prisma.item.findMany({
          include: {
            addOns: true,
          },
        });
      },
    });
  },
});
