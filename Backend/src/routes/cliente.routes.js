import { Router } from 'express';
import { getCliente, createCliente, deleteCliente } from '../controllers/cliente.controller.js';
const router = Router()

//Obtener todos los vendedores
router.get('/', getCliente);

//Crear un nuevo tecnico 
router.post('/', createCliente);

router.delete('/:id', deleteCliente);

export default router