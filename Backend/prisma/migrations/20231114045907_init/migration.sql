/*
  Warnings:

  - Changed the type of `fecha` on the `factura` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `total` on the `factura` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "factura" DROP COLUMN "fecha",
ADD COLUMN     "fecha" TIMESTAMP(3) NOT NULL,
DROP COLUMN "total",
ADD COLUMN     "total" BIGINT NOT NULL;
