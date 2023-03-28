-- CreateTable
CREATE TABLE "Tipo_evento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Espacio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "tipo_eventoId" INTEGER NOT NULL,
    "lat" DECIMAL NOT NULL,
    "lng" DECIMAL NOT NULL,
    "ubicacion" TEXT NOT NULL,
    CONSTRAINT "Espacio_tipo_eventoId_fkey" FOREIGN KEY ("tipo_eventoId") REFERENCES "Tipo_evento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Evento" (
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
    CONSTRAINT "Evento_tipo_eventoId_fkey" FOREIGN KEY ("tipo_eventoId") REFERENCES "Tipo_evento" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Evento_ubicacionId_fkey" FOREIGN KEY ("ubicacionId") REFERENCES "Espacio" ("ubicacion") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "resetToken" TEXT,
    "resetTokenExpiresAt" DATETIME
);

-- CreateIndex
CREATE UNIQUE INDEX "Espacio_ubicacion_key" ON "Espacio"("ubicacion");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
