/*
  Warnings:

  - A unique constraint covering the columns `[email,phone,cnpj]` on the table `carryings` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "carryings_phone_key";

-- DropIndex
DROP INDEX "carryings_email_key";

-- DropIndex
DROP INDEX "carryings_cnpj_key";

-- CreateIndex
CREATE UNIQUE INDEX "carryings_email_phone_cnpj_key" ON "carryings"("email", "phone", "cnpj");
