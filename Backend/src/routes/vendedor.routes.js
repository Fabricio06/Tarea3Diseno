import { Router } from 'express';
import { getVendedor, createVendedor, deleteVendedor } from '../controllers/vendedor.controller.js';
const router = Router()

//Obtener todos los vendedores
router.get('/', getVendedor);

//Crear un nuevo tecnico 
router.post('/', createVendedor);

router.delete('/:id', deleteVendedor);

export default router
