/*
  Warnings:

  - A unique constraint covering the columns `[cnpj]` on the table `carryings` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `carryings` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `carryings` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "carryings_email_phone_cnpj_key";

-- CreateIndex
CREATE UNIQUE INDEX "carryings_cnpj_key" ON "carryings"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "carryings_email_key" ON "carryings"("email");

-- CreateIndex
CREATE UNIQUE INDEX "carryings_phone_key" ON "carryings"("phone");
