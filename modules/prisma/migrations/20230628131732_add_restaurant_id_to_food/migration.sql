/*
  Warnings:

  - The primary key for the `ClosedDay` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `OpeningHour` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "ClosedDay" DROP CONSTRAINT "ClosedDay_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "ClosedDay_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ClosedDay_id_seq";

-- AlterTable
ALTER TABLE "Food" ADD COLUMN     "restaurantId" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "OpeningHour" DROP CONSTRAINT "OpeningHour_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "OpeningHour_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "OpeningHour_id_seq";

-- AddForeignKey
ALTER TABLE "Food" ADD CONSTRAINT "Food_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
