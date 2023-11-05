import { Router } from 'express';
import {getProducto, getProductoById, createProducto, 
    updateProducto, deleteProducto} from '../controllers/producto.controller.js';
const router = Router()

// Obtener todos los usuarios
router.get('/',getProducto );

// Obtener un Producto por ID
router.get('/:id',getProductoById );

// Crear un nuevo Producto
router.post('/', createProducto);

// Actualizar un Producto
router.put('/:id', updateProducto);

// Eliminar un Producto
router.delete('/:id', deleteProducto);

export default router

