import express from 'express'
import cors from 'cors'
import vendedorRoutes from './routes/vendedor.routes.js'

const app = express();

app.use(cors());
app.use(express.json());

//Usar enrutador de vendedor
app.use('/api/vendedor', vendedorRoutes);

//#region  Codigo Propio del Server.js/Api
app.get('/',(req, res) => {
    res.send('Api de la tarea 3 funcionando');
})

app.listen(3001, () => {
    console.log(`Servidor corriendo en http://localhost:3001`);
});
//#endregion