import express from 'express'
import cors from 'cors'
import usuario from './routes/usuario.routes.js'
import vendedorRoutes from './routes/vendedor.routes.js'
import producto from './routes/producto.routes.js'

const app = express();

app.use(cors());
app.use(express.json());

//Usar enrutador de vendedor
app.use('/api/vendedor', vendedorRoutes);

//Usar enrutador de usuario
app.use('/api/usuario', usuario);

//Usar enrutador de producto
app.use('/api/producto', producto);

//#region 
app.get('/',(req, res) => {
    res.send('Api de la tarea 3 funcionando');
})

app.listen(3001, () => {
    console.log(`Servidor corriendo en http://localhost:3001`);
});
//#endregion