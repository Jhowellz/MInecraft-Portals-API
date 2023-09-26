// Exportacion de libreria para todos los precesos del servidor
import express from 'express'
// Importacion de la libreria para traer las variables .env
import dotenv from 'dotenv'
// Middleware para utilizar express
import cors from 'cors'
// Importacion de la base de datos
import connection from './database.js'

//---------------------------------------
// Inicializacion de express
const app = express()
// Inicializacion dela configuracion del .env
dotenv.config()
// Toma del archivo .env el puerto o por defecto lo despliega en el 3003
app.set('port', process.env.port || 3003)
app.use(cors())
connection()

// ------------------------
// Middleware
app.use(express.json())

// ---------------------------------------
// Rutas
app.get('/api', (req, res)=>{
    res.send('servidor iniciado')
}) 

export default app