/*
  Warnings:

  - Added the required column `timezone` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Restaurant" ADD COLUMN     "timezone" TEXT NOT NULL;
