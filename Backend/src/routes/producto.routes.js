import { Router } from 'express';
import {getProducto, createProducto, deleteProducto} from '../controllers/producto.controller.js';
const router = Router()

// Obtener todos los usuarios
router.get('/',getProducto );

// Crear un nuevo Producto
router.post('/', createProducto);

// Eliminar un Producto
router.delete('/:id', deleteProducto);

export default router

