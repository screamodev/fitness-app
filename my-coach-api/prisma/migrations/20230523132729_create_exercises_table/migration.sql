-- CreateTable
CREATE TABLE "exercises" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "name_uk" TEXT NOT NULL,
    "type_id" INTEGER,
    "primary_image_id" INTEGER,
    "instruction" TEXT,
    "instruction_uk" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "exercises_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "exercises_primary_image_id_key" ON "exercises"("primary_image_id");
