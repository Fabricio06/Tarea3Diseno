-- CreateTable
CREATE TABLE "registrar" (
    "id" SERIAL NOT NULL,
    "contrasena" TEXT NOT NULL,
    "correo" TEXT NOT NULL,

    CONSTRAINT "registrar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido1" TEXT NOT NULL,
    "apellido2" TEXT NOT NULL,
    "registrar_id" INTEGER NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cliente" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido1" TEXT NOT NULL,
    "apellido2" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vendedor" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido1" TEXT NOT NULL,
    "apellido2" TEXT NOT NULL,

    CONSTRAINT "vendedor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "factura" (
    "id" SERIAL NOT NULL,
    "vendedor_id" INTEGER NOT NULL,
    "cliente_id" INTEGER NOT NULL,
    "estado" BOOLEAN NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "subtotal" BIGINT NOT NULL,
    "total" BIGINT NOT NULL,
    "detalle_factura_id" INTEGER NOT NULL,

    CONSTRAINT "factura_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "factura_detalle_factura" (
    "id" SERIAL NOT NULL,
    "factura_id" INTEGER NOT NULL,
    "detalle_factura_id" INTEGER NOT NULL,

    CONSTRAINT "factura_detalle_factura_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "detalle_factura" (
    "id" SERIAL NOT NULL,
    "cantidad" INTEGER NOT NULL,

    CONSTRAINT "detalle_factura_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "producto" (
    "id" SERIAL NOT NULL,
    "categoria_id" INTEGER NOT NULL,
    "promocion_id" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "distribuidora_id" INTEGER NOT NULL,
    "cantidad" TEXT NOT NULL,
    "precio_unitario" BIGINT NOT NULL,

    CONSTRAINT "producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categoria_producto" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "categoria_producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "distribuidor" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "distribuidor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "promocion" (
    "id" SERIAL NOT NULL,
    "nombre_promocion" TEXT NOT NULL,
    "descuento_id" INTEGER NOT NULL,
    "motivo_promocion" TEXT NOT NULL,

    CONSTRAINT "promocion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "descuento" (
    "id" SERIAL NOT NULL,
    "porcentaje" INTEGER NOT NULL,

    CONSTRAINT "descuento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "impuesto" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "porcentaje" TEXT NOT NULL,

    CONSTRAINT "impuesto_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_registrar_id_fkey" FOREIGN KEY ("registrar_id") REFERENCES "registrar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "factura" ADD CONSTRAINT "factura_vendedor_id_fkey" FOREIGN KEY ("vendedor_id") REFERENCES "vendedor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "factura" ADD CONSTRAINT "factura_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "factura" ADD CONSTRAINT "factura_detalle_factura_id_fkey" FOREIGN KEY ("detalle_factura_id") REFERENCES "detalle_factura"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "factura_detalle_factura" ADD CONSTRAINT "factura_detalle_factura_factura_id_fkey" FOREIGN KEY ("factura_id") REFERENCES "factura"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "factura_detalle_factura" ADD CONSTRAINT "factura_detalle_factura_detalle_factura_id_fkey" FOREIGN KEY ("detalle_factura_id") REFERENCES "detalle_factura"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "producto" ADD CONSTRAINT "producto_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "categoria_producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "producto" ADD CONSTRAINT "producto_promocion_id_fkey" FOREIGN KEY ("promocion_id") REFERENCES "promocion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "producto" ADD CONSTRAINT "producto_distribuidora_id_fkey" FOREIGN KEY ("distribuidora_id") REFERENCES "distribuidor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "promocion" ADD CONSTRAINT "promocion_descuento_id_fkey" FOREIGN KEY ("descuento_id") REFERENCES "descuento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
