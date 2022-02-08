-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_carryings" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "typeOfPerson" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "stateRegistration" TEXT NOT NULL,
    "socialReason" TEXT NOT NULL,
    "fantasyName" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "Observation" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);
INSERT INTO "new_carryings" ("Observation", "cep", "city", "cnpj", "created_at", "email", "fantasyName", "id", "neighborhood", "number", "phone", "socialReason", "state", "stateRegistration", "street", "typeOfPerson", "updated_at") SELECT "Observation", "cep", "city", "cnpj", "created_at", "email", "fantasyName", "id", "neighborhood", "number", "phone", "socialReason", "state", "stateRegistration", "street", "typeOfPerson", "updated_at" FROM "carryings";
DROP TABLE "carryings";
ALTER TABLE "new_carryings" RENAME TO "carryings";
CREATE UNIQUE INDEX "carryings_cnpj_key" ON "carryings"("cnpj");
CREATE UNIQUE INDEX "carryings_email_key" ON "carryings"("email");
CREATE UNIQUE INDEX "carryings_phone_key" ON "carryings"("phone");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
