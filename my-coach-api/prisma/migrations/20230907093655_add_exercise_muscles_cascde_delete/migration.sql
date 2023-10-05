-- DropForeignKey
ALTER TABLE "exercise_muscle" DROP CONSTRAINT "exercise_muscle_exercise_id_fkey";

-- AddForeignKey
ALTER TABLE "exercise_muscle" ADD CONSTRAINT "exercise_muscle_exercise_id_fkey" FOREIGN KEY ("exercise_id") REFERENCES "exercises"("id") ON DELETE CASCADE ON UPDATE CASCADE;
