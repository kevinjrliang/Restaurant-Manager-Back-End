-- CreateTable
CREATE TABLE "user_account" (
    "id" SERIAL NOT NULL,
    "restaurant_id" BIGINT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "access_level" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_account_pkey" PRIMARY KEY ("id")
);
