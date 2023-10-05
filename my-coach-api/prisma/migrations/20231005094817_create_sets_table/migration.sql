-- CreateTable
CREATE TABLE "sets" (
    "id" SERIAL NOT NULL,
    "reps" INTEGER,
    "weight" DOUBLE PRECISION,
    "time" INTEGER,
    "training_exercise_id" INTEGER NOT NULL,

    CONSTRAINT "sets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "sets" ADD CONSTRAINT "sets_training_exercise_id_fkey" FOREIGN KEY ("training_exercise_id") REFERENCES "training_exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
