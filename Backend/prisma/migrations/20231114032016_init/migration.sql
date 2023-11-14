/*
  Warnings:

  - You are about to drop the column `cliente_id` on the `factura` table. All the data in the column will be lost.
  - You are about to drop the column `detalle_factura_id` on the `factura` table. All the data in the column will be lost.
  - You are about to drop the column `impuesto` on the `factura` table. All the data in the column will be lost.
  - You are about to drop the column `subtotal` on the `factura` table. All the data in the column will be lost.
  - You are about to drop the column `vendedor_id` on the `factura` table. All the data in the column will be lost.
  - You are about to drop the column `distribuidor` on the `producto` table. All the data in the column will be lost.
  - You are about to drop the column `promocion_id` on the `producto` table. All the data in the column will be lost.
  - Added the required column `nombre_cliente` to the `factura` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "factura" DROP CONSTRAINT "factura_cliente_id_fkey";

-- DropForeignKey
ALTER TABLE "factura" DROP CONSTRAINT "factura_detalle_factura_id_fkey";

-- DropForeignKey
ALTER TABLE "factura" DROP CONSTRAINT "factura_vendedor_id_fkey";

-- DropForeignKey
ALTER TABLE "producto" DROP CONSTRAINT "producto_promocion_id_fkey";

-- AlterTable
ALTER TABLE "factura" DROP COLUMN "cliente_id",
DROP COLUMN "detalle_factura_id",
DROP COLUMN "impuesto",
DROP COLUMN "subtotal",
DROP COLUMN "vendedor_id",
ADD COLUMN     "nombre_cliente" TEXT NOT NULL,
ALTER COLUMN "estado" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "producto" DROP COLUMN "distribuidor",
DROP COLUMN "promocion_id";
