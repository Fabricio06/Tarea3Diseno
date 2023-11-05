import {pool} from '../db/dbConfig.js'

export const getUsuario = async(req, res) => {
    try {
        const result = await pool.query('SELECT * FROM usuario');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getUsuarioById = async(req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM usuario WHERE id = $1', [id]);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const createUsuario = async(req, res) => {
    try {
        let { nombre, apellido1, apellido2, contrasena, correo } = req.body; 
        await pool.query('BEGIN');
        const insertRegistrar = 'INSERT INTO registrar (contrasena, correo) VALUES ($1, $2) RETURNING id';
        const resultRegistrar = await pool.query(insertRegistrar, [contrasena, correo]);
        
        if (resultRegistrar.rows.length > 0) {
            const registrar_id = resultRegistrar.rows[0].id;
            // Inserta en la tabla 'usuario' usando el 'registrar_id' obtenido
            const insertUsuario = 'INSERT INTO usuario (nombre, apellido1, apellido2, registrar_id) VALUES ($1, $2, $3, $4) RETURNING *';
            const resultUsuario = await pool.query(insertUsuario, [nombre, apellido1, apellido2, registrar_id]);
            await pool.query('COMMIT');
            res.json(resultUsuario.rows[0]);
            // Retorna el resultado o lo que consideres necesario
        } else {
            // Si no se pudo insertar en la tabla 'registrar', hacer rollback
            await pool.query('ROLLBACK');
            throw new Error('No se pudo registrar el usuario.');
        }
    } catch (error) {
        console.error('Error inserting usuario:', error);
        res.status(500).json({ error: error.message });
    }
}

export const updateUsuario = async(req, res) => {
    try {
        const { id } = req.params;
        const { nombre, apellido1, apellido2, registrar_id } = req.body;
        await pool.query('UPDATE usuario SET nombre = $1, apellido1 = $2, apellido2 = $3, registrar_id = $4 WHERE id = $5', [nombre, apellido1, apellido2, registrar_id, id]);
        res.json({ message: 'Usuario actualizado exitosamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const deleteUsuario = async(req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM usuario WHERE id = $1', [id]);
        res.json({ message: 'Usuario eliminado exitosamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}