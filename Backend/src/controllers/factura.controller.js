import {pool} from '../db/dbConfig.js'
import moment from 'moment';

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
        let { estado, fecha, nombre_cliente, total } = req.body;
        console.log({ estado, fecha, nombre_cliente, total });
        const fechaFormateada = fecha ? moment(fecha, 'YYYY-MM-DD').format('DD-MM-YYYY') : null;
        console.log(fechaFormateada);
        const result = await pool.query('INSERT INTO factura (estado,fecha,nombre_cliente,total) VALUES ($1, $2, $3, $4) RETURNING *', [estado, fechaFormateada, nombre_cliente, total]);
        res.json(result.rows[0]);        
    } catch (error) {
        console.error('Error inserting Factura:', error);
        res.status(500).json({ error: error.message });
    }
}

export const getFacturaID = async(req, res) => {
    try{
        const { id } = req.params;
        const result = await pool.query('SELECT * FROM factura WHERE id = $1', [id]);
        res.json(result.rows[0]);        
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
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