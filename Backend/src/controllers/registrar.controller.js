import {pool} from '../db/dbConfig.js'

export const getRegistrar = async(req, res) => {
    try {
        const result = await pool.query('SELECT * FROM registrar');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getRegistrarById = async(req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM registrar WHERE id = $1', [id]);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const createRegistrar = async(req, res) => {
    try {
        let { contrasena, correo } = req.body;
        console.log({ contrasena, correo });
        const result = await pool.query('INSERT INTO registrar (nombre, apellido1, apellido2, registrar_id) VALUES ($1, $2, $3, $4) RETURNING *', [nombre, apellido1, apellido2, registrar_id]);
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error inserting tecnico:', error);
        res.status(500).json({ error: error.message });
    }
}

export const updateRegistrar = async(req, res) => {
    try {
        const { id } = req.params;
        const { nombre, apellido1, apellido2, registrar_id } = req.body;
        await pool.query('UPDATE registrar SET nombre = $1, apellido1 = $2, apellido2 = $3, registrar_id = $4 WHERE id = $6', [nombre, apellido1, apellido2, registrar_id, id]);
        res.json({ message: 'Tecnico actualizado exitosamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const deleteRegistrar = async(req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM registrar WHERE id = $1', [id]);
        res.json({ message: 'Tecnico eliminado exitosamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}