import { data } from '../../data/links';
import prisma from '../../lib/prisma';

async function main() {
  // await prisma.user.deleteMany({});
  await prisma.link.deleteMany({});

  await prisma.link.createMany({
    data,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
