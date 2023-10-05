/*
  Warnings:

  - Added the required column `type` to the `medias` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MediaType" AS ENUM ('image', 'video');

-- AlterTable
ALTER TABLE "medias" ADD COLUMN     "type" "MediaType" NOT NULL;
