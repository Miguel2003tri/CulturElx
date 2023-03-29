/*
  Warnings:

  - You are about to drop the column `Imagen` on the `Espacio` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Espacio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "tipo_eventoId" INTEGER NOT NULL,
    "lat" DECIMAL NOT NULL,
    "lng" DECIMAL NOT NULL,
    "ubicacion" TEXT NOT NULL,
    "img" TEXT,
    CONSTRAINT "Espacio_tipo_eventoId_fkey" FOREIGN KEY ("tipo_eventoId") REFERENCES "TipoEvento" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Espacio" ("id", "lat", "lng", "nombre", "tipo_eventoId", "ubicacion") SELECT "id", "lat", "lng", "nombre", "tipo_eventoId", "ubicacion" FROM "Espacio";
DROP TABLE "Espacio";
ALTER TABLE "new_Espacio" RENAME TO "Espacio";
CREATE UNIQUE INDEX "Espacio_ubicacion_key" ON "Espacio"("ubicacion");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
