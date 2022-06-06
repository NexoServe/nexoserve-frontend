import { PrismaClient } from '@prisma/client';
import { data } from '../data/links';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: `igli1@gmail.com`,
      role: `ADMIN`,
      bookmarks: {
        connectOrCreate: {
          create: data[0],
          where: {
            id: `8a9020b2-363b-4a4f-ad26-d6d55b51bqes`,
          },
        },
      },
    },
  });

  //   await prisma.link.createMany({
  //     data: data,
  //   });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
