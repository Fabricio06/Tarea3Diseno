import { Router } from 'express';
import {getProducto, getProductoID, createProducto, updateProducto, deleteProducto} from '../controllers/producto.controller.js';
const router = Router()

// Obtener todos los productos
router.get('/',getProducto );

//Obtener prroducto por id
router.get('/:id', getProductoID)

// Crear un nuevo Producto
router.post('/crearProducto', createProducto);

//Actualizar un producto
router.put('/:id', updateProducto);

// Eliminar un Producto
router.delete('/:id', deleteProducto);

export default router

