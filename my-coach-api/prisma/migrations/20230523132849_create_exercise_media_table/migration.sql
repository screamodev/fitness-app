-- CreateTable
CREATE TABLE "exercise_media" (
    "id" SERIAL NOT NULL,
    "exercise_id" INTEGER NOT NULL,
    "media_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "exercise_media_pkey" PRIMARY KEY ("id")
);
