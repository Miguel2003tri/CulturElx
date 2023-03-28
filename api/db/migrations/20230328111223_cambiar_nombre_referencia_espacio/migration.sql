/*
  Warnings:

  - You are about to drop the column `ubicacionId` on the `Evento` table. All the data in the column will be lost.
  - Added the required column `espacioId` to the `Evento` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Evento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "horarios" TEXT NOT NULL,
    "tipo_eventoId" INTEGER NOT NULL,
    "fecha" TEXT NOT NULL,
    "pases" TEXT NOT NULL,
    "sala" TEXT NOT NULL,
    "duracion" TEXT NOT NULL,
    "espacioId" INTEGER NOT NULL,
    "director" TEXT NOT NULL,
    "sinopsis" TEXT NOT NULL,
    "trailer" TEXT NOT NULL,
    "reparto" TEXT NOT NULL,
    "precio" INTEGER NOT NULL,
    "img" TEXT NOT NULL,
    CONSTRAINT "Evento_tipo_eventoId_fkey" FOREIGN KEY ("tipo_eventoId") REFERENCES "TipoEvento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Evento_espacioId_fkey" FOREIGN KEY ("espacioId") REFERENCES "Espacio" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Evento" ("director", "duracion", "fecha", "horarios", "id", "img", "nombre", "pases", "precio", "reparto", "sala", "sinopsis", "tipo_eventoId", "trailer") SELECT "director", "duracion", "fecha", "horarios", "id", "img", "nombre", "pases", "precio", "reparto", "sala", "sinopsis", "tipo_eventoId", "trailer" FROM "Evento";
DROP TABLE "Evento";
ALTER TABLE "new_Evento" RENAME TO "Evento";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
