// /graphql/types/User.ts
import {
  enumType,
  extendType,
  inputObjectType,
  nonNull,
  objectType,
} from 'nexus';
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

export const CreateAddOnInput = inputObjectType({
  name: 'CreateAddOnInput',
  definition(t) {
    t.string('id');
    t.nonNull.string(`name`);
    t.nonNull.boolean('isRequired');
    t.nonNull.list.nonNull.field('items', {
      type: 'CreateItemInput',
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
