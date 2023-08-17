import { v4 as uuidv4 } from 'uuid';

import { data } from '../../data/foods';
import { openingHours } from '../../data/openingHours';
import prisma from '../../lib/prisma';

const getCategoryID = async (name: string) => {
  console.log('name', name);
  const category = await prisma.foodCategory.findFirst({
    where: { name },
  });

  console.log('category', category);

  if (category) {
    console.log('HERE');
    return category.id;
  }

  const newCategory = await prisma.foodCategory.create({
    data: { name },
  });

  return newCategory.id;
};

async function main() {
  await prisma.food.deleteMany({});
  await prisma.addOn.deleteMany({});
  await prisma.item.deleteMany({});
  await prisma.foodSize.deleteMany({});
  await prisma.foodCategory.deleteMany({});
  await prisma.openingHour.deleteMany({});
  await prisma.closedDay.deleteMany({});
  await prisma.location.deleteMany({});
  await prisma.restaurant.deleteMany({});

  const restaurant = await prisma.restaurant.create({
    data: {
      name: "Igli's Pizza",
      timezone: 'America/New_York',
      address: '349 Whitehall road, Albany, NY, 12208',
      radius:
        5 *
        parseFloat(
          process.env.NEXT_PUBLIC_MILES_TO_METERS_MULTIPLIER as string,
        ),
      pickUpOffset: 15,
      deliveryOffset: 30,
      location: {
        create: {
          latitude: 42.64959,
          longitude: -73.807041,
        },
      },
    },
  });

  await prisma.openingHour.createMany({
    data: openingHours.flatMap((hours) =>
      hours.time.map((time) => ({
        dayOfWeek: hours.dayOfWeek,
        openTime: time.opens_at,
        closeTime: time.closes_at,
        restaurantId: restaurant.id,
      })),
    ),
  });

  await prisma.foodCategory.createMany({
    data: [
      { name: 'Traditional Pizza', order: 1 },
      { name: 'Speciality Pizza', order: 2 },
      { name: 'Speciality Sicilian Pizza', order: 3 },
      { name: 'Appetizers', order: 4 },
    ],
  });

  await Promise.all(
    data.map(async (input) => {
      console.log('input.category', input.category);
      const categoryId = await getCategoryID(input.category);

      console.log('categoryId', categoryId);
      return prisma.food.create({
        data: {
          id: uuidv4(),
          name: input?.name,
          description: input?.description,
          image: input?.image,
          price: input.price,
          categoryId: categoryId,
          restaurantId: restaurant.id,
          sizes: {
            connectOrCreate: input.sizes?.map((size) => ({
              where: {
                id: uuidv4(),
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
                            id: uuidv4(),
                          },
                          create: {
                            id: uuidv4(),
                            name: item?.name,
                            price: item?.price,
                            itemSizes: {
                              connectOrCreate: item.itemSizes?.map(
                                (itemSize) => ({
                                  where: {
                                    id: uuidv4(),
                                  },
                                  create: {
                                    id: uuidv4(),
                                    name: itemSize?.name,
                                    price: itemSize?.price,
                                    default: itemSize?.default,
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
                id: uuidv4(),
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
                        connectOrCreate: item.itemSizes?.map((itemSize) => ({
                          where: {
                            id: itemSize?.id || '',
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
    }),
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
