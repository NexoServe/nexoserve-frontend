// /graphql/types/User.ts
import { enumType, extendType, objectType } from 'nexus';
import { Food } from './Food';
import { Item } from './Item';

export const AddOn = objectType({
  name: `AddOn`,
  definition(t) {
    t.string(`id`);
    t.string(`name`);
    t.boolean(`isRequired`);
    t.list.field(`foods`, {
      type: 'Food',
    });
    t.list.field(`items`, {
      type: 'Item',
    });
  },
});

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
