import prisma from '../../lib/prisma';

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
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
