import {pool} from '../db/dbConfig.js'

export const getCliente = async(req, res) => {
    try{
        const result = await pool.query('SELECT * FROM cliente');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).jason({ error: 'Internal Server Error' });
    }
}

export const createCliente = async(req, res) => {
    try {
        let { nombre, apellido1, apellido2, direccion } = req.body;
        console.log({ nombre, apellido1, apellido2, direccion });
        const result = await pool.query('INSERT INTO cliente (nombre,apellido1,apellido2,direccion) VALUES ($1, $2, $3, $4) RETURNING *', [nombre, apellido1, apellido2, direccion]);
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error inserting cliente:', error);
        res.status(500).json({ error: error.message });
    }
}

export const deleteCliente = async(req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM cliente WHERE id = $1', [id]);
        res.json({ message: 'cliente eliminado exitosamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
