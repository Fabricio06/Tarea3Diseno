// dbConfig.js
import conexion from 'pg';
const { Pool } = conexion;

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Tarea3Diseno',
    password: 'admin12345',
    port: 5433,
});
