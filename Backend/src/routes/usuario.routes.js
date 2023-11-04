import { Router } from 'express';
import {getUsuario, getUsuarioById, createUsuario, 
    updateUsuario, deleteUsuario} from '../controllers/usuario.controller.js';
const router = Router()

// Obtener todos los usuarios
router.get('/',getUsuario );

// Obtener un usuario por ID
router.get('/:id',getUsuarioById );

// Crear un nuevo usuario
router.post('/', createUsuario);

// Actualizar un usuario
router.put('/:id', updateUsuario);

// Eliminar un usuario
router.delete('/:id', deleteUsuario);

export default router

