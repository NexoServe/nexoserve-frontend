import { extendType } from 'nexus';

export const AddOnsQuery = extendType({
  type: `Query`,
  definition(t) {
    t.nonNull.list.field(`addOns`, {
      type: `AddOn`,
      resolve(_parent, _args, ctx) {
        return ctx.prisma.addOn.findMany({
          include: {
            foods: true,
            items: true,
          },
        });
      },
    });
  },
});
