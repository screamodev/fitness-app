-- CreateTable
CREATE TABLE "exercise_muscle" (
    "exercise_id" INTEGER NOT NULL,
    "muscle_id" INTEGER NOT NULL,
    "is_primary" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "exercise_muscle_exercise_id_muscle_id_key" ON "exercise_muscle"("exercise_id", "muscle_id");
