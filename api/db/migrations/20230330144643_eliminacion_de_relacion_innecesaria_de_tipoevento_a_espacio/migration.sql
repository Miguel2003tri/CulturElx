/*
  Warnings:

  - You are about to drop the column `tipo_eventoId` on the `Espacio` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Espacio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "lat" DECIMAL NOT NULL,
    "lng" DECIMAL NOT NULL,
    "ubicacion" TEXT NOT NULL,
    "img" TEXT DEFAULT 'null'
);
INSERT INTO "new_Espacio" ("id", "img", "lat", "lng", "nombre", "ubicacion") SELECT "id", "img", "lat", "lng", "nombre", "ubicacion" FROM "Espacio";
DROP TABLE "Espacio";
ALTER TABLE "new_Espacio" RENAME TO "Espacio";
CREATE UNIQUE INDEX "Espacio_ubicacion_key" ON "Espacio"("ubicacion");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
