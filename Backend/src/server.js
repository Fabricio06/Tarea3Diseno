import express from 'express'
import cors from 'cors'
import usuario from './routes/usuario.routes.js'
import clienteRoutes from './routes/cliente.routes.js'
import producto from './routes/producto.routes.js'
import factura from './routes/factura.routes.js'


const app = express();

app.use(cors());
app.use(express.json());

//Usar enrutador de usuario
app.use('/api/usuario', usuario);

//Usar enturador de cliente
app.use('/api/cliente', clienteRoutes);

//Usar enrutador de producto
app.use('/api/producto', producto);

//Usar enrutador de factura
app.use('/api/factura', factura);


//#region 
app.get('/',(req, res) => {
    res.send('Api de la tarea 3 funcionando');
})

app.listen(3001, () => {
    console.log(`Servidor corriendo en http://localhost:3001`);
});
//#endregion