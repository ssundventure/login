/*
  Warnings:

  - The primary key for the `Like` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Like` table. All the data in the column will be lost.
  - The primary key for the `Tweet` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Tweet` table. All the data in the column will be lost.
  - Added the required column `no` to the `Like` table without a default value. This is not possible if the table is not empty.
  - Added the required column `no` to the `Tweet` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Like" (
    "no" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userid" TEXT NOT NULL,
    "tweetid" INTEGER NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Like_tweetid_fkey" FOREIGN KEY ("tweetid") REFERENCES "Tweet" ("no") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Like_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User" ("userid") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Like" ("count", "created_at", "tweetid", "userid") SELECT "count", "created_at", "tweetid", "userid" FROM "Like";
DROP TABLE "Like";
ALTER TABLE "new_Like" RENAME TO "Like";
CREATE INDEX "Like_userid_idx" ON "Like"("userid");
CREATE INDEX "Like_tweetid_idx" ON "Like"("tweetid");
CREATE TABLE "new_Tweet" (
    "no" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userid" TEXT NOT NULL,
    "tweet" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "Tweet_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User" ("userid") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Tweet" ("created_at", "tweet", "updated_at", "userid") SELECT "created_at", "tweet", "updated_at", "userid" FROM "Tweet";
DROP TABLE "Tweet";
ALTER TABLE "new_Tweet" RENAME TO "Tweet";
CREATE INDEX "Tweet_userid_idx" ON "Tweet"("userid");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
