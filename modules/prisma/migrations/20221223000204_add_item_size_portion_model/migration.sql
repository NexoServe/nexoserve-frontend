-- AlterTable
ALTER TABLE "Food" ADD COLUMN     "image" TEXT;

-- CreateTable
CREATE TABLE "ItemSizePortion" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ItemSizePortion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ItemSizeToItemSizePortion" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ItemSizeToItemSizePortion_AB_unique" ON "_ItemSizeToItemSizePortion"("A", "B");

-- CreateIndex
CREATE INDEX "_ItemSizeToItemSizePortion_B_index" ON "_ItemSizeToItemSizePortion"("B");

-- AddForeignKey
ALTER TABLE "_ItemSizeToItemSizePortion" ADD CONSTRAINT "_ItemSizeToItemSizePortion_A_fkey" FOREIGN KEY ("A") REFERENCES "ItemSize"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemSizeToItemSizePortion" ADD CONSTRAINT "_ItemSizeToItemSizePortion_B_fkey" FOREIGN KEY ("B") REFERENCES "ItemSizePortion"("id") ON DELETE CASCADE ON UPDATE CASCADE;
