import { Router } from 'express';
import { getFactura, getFacturaID, createFactura, deleteFactura } from '../controllers/factura.controller.js';
const router = Router()

//Obtener todos los Factura
router.get('/', getFactura);

router.get('/:id', getFacturaID)

//Crear nueva factura
router.post('/crearFactura', createFactura);

router.delete('/:id', deleteFactura);

export default router
