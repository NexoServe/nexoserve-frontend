/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `FoodCategory` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "FoodCategory_name_key" ON "FoodCategory"("name");
