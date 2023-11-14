import {pool} from '../db/dbConfig.js'

export const getFactura = async(req, res) => {
    try{
        const result = await pool.query('SELECT * FROM factura');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).jason({ error: 'Internal Server Error' });
    }
}

export const createFactura = async(req, res) => {
    try {
        let { nombre_cliente, estado, fecha, total } = req.body;
        console.log({ nombre_cliente, estado, fecha, total });
        const result = await pool.query('INSERT INTO factura (nombre_cliente,estado,fecha,total) VALUES ($1, $2, $3, $4) RETURNING *', [nombre_cliente, estado, fecha, total]);
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error inserting Factura:', error);
        res.status(500).json({ error: error.message });
    }
}

export const deleteFactura = async(req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM factura WHERE id = $1', [id]);
        res.json({ message: 'Factura eliminado exitosamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}