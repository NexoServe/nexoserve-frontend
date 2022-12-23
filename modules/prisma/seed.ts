import { v4 as uuidv4 } from 'uuid';

import { data } from '../../data/links';
import prisma from '../../lib/prisma';

async function main() {
  await prisma.food.deleteMany({});
  await prisma.addOn.deleteMany({});
  await prisma.item.deleteMany({});
  await prisma.foodSize.deleteMany({});

  await Promise.all(
    data.map((input) =>
      prisma.food.create({
        data: {
          id: uuidv4(),
          name: input?.name,
          description: input?.description,
          price: input.price,
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
                                    default: itemSize.default,
                                    portions: {
                                      connectOrCreate: itemSize.portions?.map(
                                        (portion) => ({
                                          where: {
                                            id: uuidv4(),
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
      }),
    ),
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
