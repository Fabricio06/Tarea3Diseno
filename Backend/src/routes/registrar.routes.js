import { Router } from 'express';
import {getRegistrar, getRegistrarById, createRegistrar, 
    updateRegistrar, deleteRegistrar} from '../controllers/registrar.controller.js';
const router = Router()

// Obtener todos los tecnicos 
router.get('/',getRegistrar );

// Obtener un tecnico por ID
router.get('/:id',getRegistrarById );

// Crear un nuevo tecnico
router.post('/', createRegistrar);

// Actualizar un tecnico
router.put('/:id', updateRegistrar);

// Eliminar un tecnico
router.delete('/:id', deleteRegistrar);

export default router

