/*
  Warnings:

  - You are about to drop the column `categoria_id` on the `producto` table. All the data in the column will be lost.
  - You are about to drop the column `distribuidora_id` on the `producto` table. All the data in the column will be lost.
  - You are about to drop the column `descuento_id` on the `promocion` table. All the data in the column will be lost.
  - You are about to drop the `categoria_producto` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `descuento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `distribuidor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `impuesto` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `impuesto` to the `factura` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoria` to the `producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `distribuidor` to the `producto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `descuento` to the `promocion` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "producto" DROP CONSTRAINT "producto_categoria_id_fkey";

-- DropForeignKey
ALTER TABLE "producto" DROP CONSTRAINT "producto_distribuidora_id_fkey";

-- DropForeignKey
ALTER TABLE "promocion" DROP CONSTRAINT "promocion_descuento_id_fkey";

-- AlterTable
ALTER TABLE "factura" ADD COLUMN     "impuesto" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "producto" DROP COLUMN "categoria_id",
DROP COLUMN "distribuidora_id",
ADD COLUMN     "categoria" TEXT NOT NULL,
ADD COLUMN     "distribuidor" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "promocion" DROP COLUMN "descuento_id",
ADD COLUMN     "descuento" INTEGER NOT NULL;

-- DropTable
DROP TABLE "categoria_producto";

-- DropTable
DROP TABLE "descuento";

-- DropTable
DROP TABLE "distribuidor";

-- DropTable
DROP TABLE "impuesto";
