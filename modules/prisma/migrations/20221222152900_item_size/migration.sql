-- CreateTable
CREATE TABLE "ItemSize" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ItemSize_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ItemToItemSize" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ItemToItemSize_AB_unique" ON "_ItemToItemSize"("A", "B");

-- CreateIndex
CREATE INDEX "_ItemToItemSize_B_index" ON "_ItemToItemSize"("B");

-- AddForeignKey
ALTER TABLE "_ItemToItemSize" ADD CONSTRAINT "_ItemToItemSize_A_fkey" FOREIGN KEY ("A") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemToItemSize" ADD CONSTRAINT "_ItemToItemSize_B_fkey" FOREIGN KEY ("B") REFERENCES "ItemSize"("id") ON DELETE CASCADE ON UPDATE CASCADE;
