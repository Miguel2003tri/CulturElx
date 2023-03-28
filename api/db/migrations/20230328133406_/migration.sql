-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Evento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "horarios" TEXT NOT NULL,
    "tipo_eventoId" INTEGER NOT NULL,
    "fecha" TEXT NOT NULL,
    "pases" TEXT NOT NULL,
    "sala" TEXT,
    "duracion" TEXT NOT NULL,
    "espacioId" INTEGER NOT NULL,
    "director" TEXT NOT NULL,
    "sinopsis" TEXT NOT NULL,
    "trailer" TEXT,
    "reparto" TEXT,
    "precio" INTEGER NOT NULL,
    "img" TEXT,
    CONSTRAINT "Evento_tipo_eventoId_fkey" FOREIGN KEY ("tipo_eventoId") REFERENCES "TipoEvento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Evento_espacioId_fkey" FOREIGN KEY ("espacioId") REFERENCES "Espacio" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Evento" ("director", "duracion", "espacioId", "fecha", "horarios", "id", "img", "nombre", "pases", "precio", "reparto", "sala", "sinopsis", "tipo_eventoId", "trailer") SELECT "director", "duracion", "espacioId", "fecha", "horarios", "id", "img", "nombre", "pases", "precio", "reparto", "sala", "sinopsis", "tipo_eventoId", "trailer" FROM "Evento";
DROP TABLE "Evento";
ALTER TABLE "new_Evento" RENAME TO "Evento";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
