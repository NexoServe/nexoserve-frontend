import { extendType, objectType } from 'nexus';

export const Item = objectType({
  name: `Item`,
  definition(t) {
    t.string(`id`);
    t.string(`name`);
    t.float(`price`);
    t.list.field('addOns', {
      type: 'AddOn',
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
