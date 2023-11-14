import {pool} from '../db/dbConfig.js'

export const getProducto = async(req, res) => {
    try{
        const result = await pool.query('SELECT * FROM producto');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).jason({ error: 'Internal Server Error' });
    }
}

export const createProducto = async(req, res) => {
    try {
        let { categoria, nombre, cantidad, precio_unitario } = req.body;
        console.log({ categoria, nombre, cantidad, precio_unitario });
        const result = await pool.query('INSERT INTO producto (categoria, nombre, cantidad, precio_unitario) VALUES ($1, $2, $3, $4) RETURNING *', [categoria, nombre, cantidad, precio_unitario]);
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error inserting Producto:', error);
        res.status(500).json({ error: error.message });
    }
}

export const deleteProducto = async(req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM producto WHERE id = $1', [id]);
        res.json({ message: 'producto eliminado exitosamente' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}