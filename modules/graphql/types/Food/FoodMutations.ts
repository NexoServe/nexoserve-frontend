import { extendType, nonNull } from 'nexus';

import { CreateFoodInput } from '.';

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
                        sizes: {
                          connectOrCreate: item.itemSizes?.map((itemSize) => ({
                            where: {
                              id: itemSize?.id || undefined,
                            },
                            create: {
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
