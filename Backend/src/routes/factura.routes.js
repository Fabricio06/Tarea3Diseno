import { Router } from 'express';
import { getFactura, createFactura, deleteFactura } from '../controllers/factura.controller.js';
const router = Router()

//Obtener todos los Factura
router.get('/', getFactura);

//Crear un nuevo tecnico 
router.post('/', createFactura);

router.delete('/:id', deleteFactura);

export default router
