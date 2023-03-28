/*
  Warnings:

  - You are about to drop the `Tipo_evento` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Tipo_evento";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "TipoEvento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Espacio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "tipo_eventoId" INTEGER NOT NULL,
    "lat" DECIMAL NOT NULL,
    "lng" DECIMAL NOT NULL,
    "ubicacion" TEXT NOT NULL,
    CONSTRAINT "Espacio_tipo_eventoId_fkey" FOREIGN KEY ("tipo_eventoId") REFERENCES "TipoEvento" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Espacio" ("id", "lat", "lng", "nombre", "tipo_eventoId", "ubicacion") SELECT "id", "lat", "lng", "nombre", "tipo_eventoId", "ubicacion" FROM "Espacio";
DROP TABLE "Espacio";
ALTER TABLE "new_Espacio" RENAME TO "Espacio";
CREATE UNIQUE INDEX "Espacio_ubicacion_key" ON "Espacio"("ubicacion");
CREATE TABLE "new_Evento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "horarios" TEXT NOT NULL,
    "tipo_eventoId" INTEGER NOT NULL,
    "fecha" TEXT NOT NULL,
    "pases" TEXT NOT NULL,
    "sala" TEXT NOT NULL,
    "duracion" TEXT NOT NULL,
    "ubicacionId" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "sinopsis" TEXT NOT NULL,
    "trailer" TEXT NOT NULL,
    "reparto" TEXT NOT NULL,
    "precio" INTEGER NOT NULL,
    "img" TEXT NOT NULL,
    CONSTRAINT "Evento_tipo_eventoId_fkey" FOREIGN KEY ("tipo_eventoId") REFERENCES "TipoEvento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Evento_ubicacionId_fkey" FOREIGN KEY ("ubicacionId") REFERENCES "Espacio" ("ubicacion") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Evento" ("director", "duracion", "fecha", "horarios", "id", "img", "nombre", "pases", "precio", "reparto", "sala", "sinopsis", "tipo_eventoId", "trailer", "ubicacionId") SELECT "director", "duracion", "fecha", "horarios", "id", "img", "nombre", "pases", "precio", "reparto", "sala", "sinopsis", "tipo_eventoId", "trailer", "ubicacionId" FROM "Evento";
DROP TABLE "Evento";
ALTER TABLE "new_Evento" RENAME TO "Evento";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
