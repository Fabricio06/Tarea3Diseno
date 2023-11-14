// dbConfig.js
import conexion from 'pg';
const { Pool } = conexion;

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Tarea3Diseno',
    password: 'admin123456',
    port: 5432,
});
