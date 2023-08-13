/*
  Warnings:

  - Added the required column `deliveryOffset` to the `Restaurant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pickUpOffset` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Restaurant" ADD COLUMN     "deliveryOffset" INTEGER NOT NULL,
ADD COLUMN     "pickUpOffset" INTEGER NOT NULL;
