-- CreateTable
CREATE TABLE "exercise_types" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "name_uk" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "exercise_types_pkey" PRIMARY KEY ("id")
);
