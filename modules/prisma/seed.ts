import { data } from '../../data/links';
import prisma from '../../lib/prisma';
import { v4 as uuidv4 } from 'uuid';

async function main() {
  await prisma.food.deleteMany({});
  await prisma.addOn.deleteMany({});
  await prisma.item.deleteMany({});

  // await Promise.all(
  //   data.map((food) =>
  //     prisma.food.create({
  //       data: {
  //         id: uuidv4(),
  //         name: food.name,
  //         description: food.description,
  //         price: food.price,
  //         addOns: {
  //           connectOrCreate: food.addOns?.map((addOn) => ({
  //             where: {
  //               id: addOn.id,
  //             },
  //             create: {
  //               id: uuidv4(),
  //               name: addOn.name,
  //               isRequired: addOn.isRequired,
  //               items: {
  //                 connectOrCreate: addOn.items.map((item) => ({
  //                   where: {
  //                     id: item.id,
  //                   },
  //                   create: {
  //                     id: uuidv4(),
  //                     name: item.name,
  //                     price: item.price,
  //                   },
  //                 })),
  //               },
  //             },
  //           })),
  //         },
  //       },
  //     }),
  //   ),
  // );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
