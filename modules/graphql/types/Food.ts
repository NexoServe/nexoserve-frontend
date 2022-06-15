// /graphql/types/Link.ts
import { extendType, inputObjectType, nonNull, objectType } from 'nexus';
import { v4 as uuidv4 } from 'uuid';

export const Food = objectType({
  name: `Food`,
  definition(t) {
    t.string(`id`);
    t.string(`name`);
    t.string(`description`);
    t.float(`price`);
    t.list.field(`addOns`, {
      type: 'AddOn',
    });
  },
});

export const CreateFoodInput = inputObjectType({
  name: 'CreateFoodInput',
  definition(t) {
    t.string('id');
    t.nonNull.string(`name`);
    t.string('description');
    t.nonNull.float(`price`);
    t.nonNull.list.nonNull.field('addOns', {
      type: 'CreateAddOnInput',
    });
  },
});

export const FoodsQuery = extendType({
  type: `Query`,
  definition(t) {
    t.nonNull.list.field(`foods`, {
      type: 'Food',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.food.findMany({
          include: {
            addOns: {
              include: {
                items: true,
              },
            },
          },
        });
      },
    });
  },
});

export const CreateLinkMutation = extendType({
  type: `Mutation`,
  definition(t) {
    t.nonNull.field(`createLink`, {
      type: 'Food',
      args: {
        input: nonNull(CreateFoodInput),
      },
      async resolve(_parent, args, ctx) {
        return await ctx.prisma.food.create({
          include: {
            addOns: {
              include: {
                items: true,
              },
            },
          },
          data: {
            name: args.input?.name,
            description: args.input?.description,
            price: args.input.price,
            addOns: {
              connectOrCreate: args.input.addOns?.map((addOn) => ({
                where: {
                  id: addOn.id || undefined,
                },
                create: {
                  id: uuidv4(),
                  name: addOn?.name,
                  isRequired: addOn.isRequired,
                  items: {
                    connectOrCreate: addOn.items.map((item) => ({
                      where: {
                        id: item?.id || '',
                      },
                      create: {
                        id: uuidv4(),
                        name: item?.name,
                        price: item?.price,
                      },
                    })),
                  },
                },
              })),
            },
          },
        });
      },
    });
  },
});
