import { extendType, inputObjectType, nonNull, objectType } from 'nexus';
import { v4 as uuidv4 } from 'uuid';

export const Food = objectType({
  name: `Food`,
  definition(t) {
    t.string(`id`);
    t.string(`name`);
    t.string(`description`);
    t.list.field('sizes', {
      type: 'FoodSize',
    });
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
    t.list.nonNull.field('sizes', {
      type: 'CreateFoodSizeInput',
    });
    t.float(`price`);
    t.list.nonNull.field('addOns', {
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
            sizes: {
              include: {
                addOns: {
                  include: {
                    items: {
                      include: {
                        itemSizes: {
                          include: {
                            portions: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
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

export const CreateFoodMutation = extendType({
  type: `Mutation`,
  definition(t) {
    t.nonNull.field(`createFood`, {
      type: 'Food',
      args: {
        input: nonNull(CreateFoodInput),
      },
      async resolve(_parent, { input }, ctx) {
        return await ctx.prisma.food.create({
          include: {
            addOns: {
              include: {
                items: true,
              },
            },
          },
          data: {
            name: input?.name,
            description: input?.description,
            price: input.price,
            sizes: {
              connectOrCreate: input.sizes?.map((size) => ({
                where: {
                  id: size.id || undefined,
                },
                create: {
                  id: uuidv4(),
                  name: size.name,
                  price: size.price,
                  addOns: {
                    connectOrCreate: size.addOns?.map((addOn) => ({
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
                              itemSizes: {
                                connectOrCreate: item.itemSizes?.map(
                                  (itemSize) => ({
                                    where: {
                                      id: itemSize?.id || '',
                                    },
                                    create: {
                                      id: uuidv4(),
                                      name: itemSize?.name,
                                      price: itemSize?.price,
                                      default: itemSize.default,
                                      portions: {
                                        connectOrCreate: itemSize.portions?.map(
                                          (portion) => ({
                                            where: {
                                              id: portion?.id || '',
                                            },
                                            create: {
                                              id: uuidv4(),
                                              name: portion?.name,
                                              price: portion?.price,
                                              default: portion.default,
                                            },
                                          }),
                                        ),
                                      },
                                    },
                                  }),
                                ),
                              },
                            },
                          })),
                        },
                      },
                    })),
                  },
                },
              })),
            },
            addOns: {
              connectOrCreate: input.addOns?.map((addOn) => ({
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
                        sizes: {
                          connectOrCreate: item.itemSizes?.map((itemSize) => ({
                            where: {
                              id: itemSize?.id || '',
                            },
                            create: {
                              id: uuidv4(),
                              name: itemSize?.name,
                              price: itemSize?.price,
                              default: itemSize.default,
                              portions: {
                                connectOrCreate: itemSize.portions?.map(
                                  (portion) => ({
                                    where: {
                                      id: portion?.id || '',
                                    },
                                    create: {
                                      id: uuidv4(),
                                      name: portion?.name,
                                      price: portion?.price,
                                      default: portion.default,
                                    },
                                  }),
                                ),
                              },
                            },
                          })),
                        },
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
