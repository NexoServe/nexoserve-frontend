import { FoodSize, Location, Restaurant } from '@prisma/client';

import { Context } from '../../types/Context';

type RestaurantAndMenu = {
  restaurant:
    | (Restaurant & {
        location: Location | null;
      })
    | null;
  menu: {
    category: string;
    foods: {
      id: string;
      name: string;
      description: string | null;
      image: string | null;
      price: number | null;
      sizes: FoodSize[];
    }[];
  }[];
};

export async function getRestaurantAndMenu(
  ctx: Context,
  restaurantId: string,
): Promise<RestaurantAndMenu> {
  const restaurant = await ctx.prisma.restaurant.findUnique({
    where: {
      id: restaurantId,
    },
    include: {
      location: true,
    },
  });

  if (!restaurant) {
    throw new Error('Restaurant not found');
  }

  const foodsByCategory = await ctx.prisma.foodCategory.findMany({
    include: {
      foods: {
        include: {
          sizes: true,
        },
      },
    },
    where: {
      foods: {
        some: {
          restaurantId: restaurant.id,
        },
      },
    },
  });

  const menu = foodsByCategory.map((foodByCategory) => ({
    category: foodByCategory.name,
    foods: foodByCategory.foods.map((food) => ({
      id: food.id,
      name: food.name,
      description: food.description,
      image: food.image,
      price: food.price,
      sizes: food.sizes,
    })),
  }));

  return { restaurant, menu };
}
