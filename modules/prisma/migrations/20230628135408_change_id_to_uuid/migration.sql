/*
  Warnings:

  - The primary key for the `Restaurant` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "ClosedDay" DROP CONSTRAINT "ClosedDay_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "Food" DROP CONSTRAINT "Food_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "OpeningHour" DROP CONSTRAINT "OpeningHour_restaurantId_fkey";

-- AlterTable
ALTER TABLE "ClosedDay" ALTER COLUMN "restaurantId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Food" ALTER COLUMN "restaurantId" DROP DEFAULT,
ALTER COLUMN "restaurantId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "OpeningHour" ALTER COLUMN "restaurantId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Restaurant" DROP CONSTRAINT "Restaurant_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Restaurant_id_seq";

-- AddForeignKey
ALTER TABLE "OpeningHour" ADD CONSTRAINT "OpeningHour_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClosedDay" ADD CONSTRAINT "ClosedDay_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Food" ADD CONSTRAINT "Food_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
