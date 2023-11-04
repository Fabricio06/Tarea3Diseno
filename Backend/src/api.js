import express from 'express'
import cors from 'cors'
import {pool} from './db/dbConfig.js'
const app = express();
app.use(cors());
app.use(express.json());

var port = 3001;



//#region 
app.get('/',(req, res) => {
    res.send('Api de la tarea 3 funcionando');
})

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
//#endregion