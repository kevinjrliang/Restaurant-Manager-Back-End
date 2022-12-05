/*
  Warnings:

  - You are about to drop the column `password` on the `user_account` table. All the data in the column will be lost.
  - Added the required column `passwordHash` to the `user_account` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "user_account" DROP COLUMN "password",
ADD COLUMN     "passwordHash" TEXT NOT NULL;
