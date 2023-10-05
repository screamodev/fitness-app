-- AddForeignKey
ALTER TABLE "exercises" ADD CONSTRAINT "exercises_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "exercise_types"("id") ON DELETE SET NULL ON UPDATE CASCADE;
