import { extendType, inputObjectType, nonNull, objectType } from 'nexus';
import { v4 as uuidv4 } from 'uuid';

export const Food = objectType({
  name: `Food`,
  definition(t) {
    t.string(`id`);
    t.string(`name`);
    t.string(`description`);
    t.string(`image`);
    t.list.field('sizes', {
      type: 'FoodSize',
    });
    t.float(`price`);
    t.list.field(`addOns`, {
      type: 'AddOn',
    });
  },
});

export const SimpleFood = objectType({
  name: `SimpleFood`,
  definition(t) {
    t.string(`id`);
    t.string(`name`);
    t.string(`description`);
    t.string(`image`);
    t.float(`price`);
  },
});

export const FoodsByCategory = objectType({
  name: `FoodsByCategory`,
  definition(t) {
    t.nonNull.string(`category`);
    t.list.nonNull.field('foods', { type: 'SimpleFood' });
  },
});

export const CreateFoodInput = inputObjectType({
  name: 'CreateFoodInput',
  definition(t) {
    t.string('id');
    t.nonNull.string(`name`);
    t.string('description');
    t.string('image');
    t.nonNull.string('category');
    t.list.nonNull.field('sizes', {
      type: 'CreateFoodSizeInput',
    });
    t.float(`price`);
    t.list.nonNull.field('addOns', {
      type: 'CreateAddOnInput',
    });
  },
});

export const FoodsByCategoryQuery = extendType({
  type: `Query`,
  definition(t) {
    t.nonNull.list.field(`foodsByCategory`, {
      type: 'FoodsByCategory',
      async resolve(_parent, _args, ctx) {
        const foodsByCategory = await ctx.prisma.foodCategory.findMany({
          include: {
            foods: {
              include: {
                sizes: true,
              },
            },
          },
          where: { foods: { some: {} } },
        });

        return foodsByCategory.map((foodByCategory) => ({
          category: foodByCategory.name,
          foods: foodByCategory.foods.map((food) => ({
            id: food.id,
            name: food.name,
            description: food.description,
            image: food.image,
            price: food?.price ? food?.price : food?.sizes?.[0]?.price,
          })),
        }));
      },
    });
  },
});

export const FoodsQuery = extendType({
  type: `Query`,
  definition(t) {
    t.nonNull.list.field(`foods`, {
      type: 'Food',
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.food.findMany({
          include: {
            category: true,
            sizes: {
              include: {
                addOns: {
                  include: {
                    items: {
                      include: {
                        itemSizes: true,
                      },
                    },
                  },
                },
              },
            },
            addOns: {
              include: {
                items: {
                  include: {
                    itemSizes: true,
                  },
                },
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
        const existingCategory = await ctx.prisma.foodCategory.findUnique({
          where: { name: input.category },
        });

        const categoryId = existingCategory ? existingCategory.id : undefined;

        const newCategory = !existingCategory
          ? await ctx.prisma.foodCategory.create({
              data: {
                name: input.category,
              },
            })
          : undefined;

        return await ctx.prisma.food.create({
          include: {
            sizes: {
              include: {
                addOns: {
                  include: {
                    items: true,
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
          data: {
            name: input?.name,
            description: input?.description,
            price: input.price,
            categoryId: categoryId || newCategory?.id,
            image: input.image,
            sizes: {
              connectOrCreate: input.sizes?.map((size) => ({
                where: {
                  id: size?.id || undefined,
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
                        name: addOn?.name,
                        isRequired: addOn.isRequired,
                        items: {
                          connectOrCreate: addOn.items.map((item) => ({
                            where: {
                              id: item?.id || undefined,
                            },
                            create: {
                              name: item?.name,
                              price: item?.price,
                              itemSizes: {
                                connectOrCreate: item.itemSizes?.map(
                                  (itemSize) => ({
                                    where: {
                                      id: itemSize?.id || undefined,
                                    },
                                    create: {
                                      id: uuidv4(),
                                      name: itemSize?.name,
                                      price: itemSize?.price,
                                      default: itemSize.default,
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
                        id: item?.id || undefined,
                      },
                      create: {
                        id: uuidv4(),
                        name: item?.name,
                        price: item?.price,
                        sizes: {
                          connectOrCreate: item.itemSizes?.map((itemSize) => ({
                            where: {
                              id: itemSize?.id || undefined,
                            },
                            create: {
                              id: uuidv4(),
                              name: itemSize?.name,
                              price: itemSize?.price,
                              default: itemSize.default,
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
