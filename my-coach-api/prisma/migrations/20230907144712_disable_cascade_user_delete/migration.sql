-- DropForeignKey
ALTER TABLE "users_avatars" DROP CONSTRAINT "users_avatars_user_id_fkey";

-- AddForeignKey
ALTER TABLE "users_avatars" ADD CONSTRAINT "users_avatars_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
