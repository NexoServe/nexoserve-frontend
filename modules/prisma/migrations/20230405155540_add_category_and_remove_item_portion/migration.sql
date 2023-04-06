/*
  Warnings:

  - You are about to drop the `ItemSizePortion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ItemSizeToItemSizePortion` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category` to the `Food` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ItemSizeToItemSizePortion" DROP CONSTRAINT "_ItemSizeToItemSizePortion_A_fkey";

-- DropForeignKey
ALTER TABLE "_ItemSizeToItemSizePortion" DROP CONSTRAINT "_ItemSizeToItemSizePortion_B_fkey";

-- AlterTable
ALTER TABLE "Food" ADD COLUMN     "category" TEXT NOT NULL;

-- DropTable
DROP TABLE "ItemSizePortion";

-- DropTable
DROP TABLE "_ItemSizeToItemSizePortion";
