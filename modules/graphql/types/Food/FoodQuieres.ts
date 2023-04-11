import { extendType } from 'nexus';

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
