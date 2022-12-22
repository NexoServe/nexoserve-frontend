/*
  Warnings:

  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `OrderItem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ItemToOrderItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_foodId_fkey";

-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_orderId_fkey";

-- DropForeignKey
ALTER TABLE "_ItemToOrderItem" DROP CONSTRAINT "_ItemToOrderItem_A_fkey";

-- DropForeignKey
ALTER TABLE "_ItemToOrderItem" DROP CONSTRAINT "_ItemToOrderItem_B_fkey";

-- AlterTable
ALTER TABLE "Food" ALTER COLUMN "price" DROP NOT NULL;

-- DropTable
DROP TABLE "Order";

-- DropTable
DROP TABLE "OrderItem";

-- DropTable
DROP TABLE "_ItemToOrderItem";

-- CreateTable
CREATE TABLE "FoodSize" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "FoodSize_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FoodToFoodSize" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AddOnToFoodSize" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_FoodToFoodSize_AB_unique" ON "_FoodToFoodSize"("A", "B");

-- CreateIndex
CREATE INDEX "_FoodToFoodSize_B_index" ON "_FoodToFoodSize"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AddOnToFoodSize_AB_unique" ON "_AddOnToFoodSize"("A", "B");

-- CreateIndex
CREATE INDEX "_AddOnToFoodSize_B_index" ON "_AddOnToFoodSize"("B");

-- AddForeignKey
ALTER TABLE "_FoodToFoodSize" ADD CONSTRAINT "_FoodToFoodSize_A_fkey" FOREIGN KEY ("A") REFERENCES "Food"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FoodToFoodSize" ADD CONSTRAINT "_FoodToFoodSize_B_fkey" FOREIGN KEY ("B") REFERENCES "FoodSize"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AddOnToFoodSize" ADD CONSTRAINT "_AddOnToFoodSize_A_fkey" FOREIGN KEY ("A") REFERENCES "AddOn"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AddOnToFoodSize" ADD CONSTRAINT "_AddOnToFoodSize_B_fkey" FOREIGN KEY ("B") REFERENCES "FoodSize"("id") ON DELETE CASCADE ON UPDATE CASCADE;
