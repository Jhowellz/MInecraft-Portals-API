import express from "express"

// Inicializacion de express
const app = express()

// Rutas
app.get('/api', (req, res)=>{
    res.send('servidor iniciado')
}) 

export default app