/*
  Warnings:

  - The `height` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `weight` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "height",
ADD COLUMN     "height" DOUBLE PRECISION,
DROP COLUMN "weight",
ADD COLUMN     "weight" DOUBLE PRECISION;
