import app from './server.js'

// Crea un servidor en un el puerto que se especifica
app.listen(app.get('port'),()=>{
    console.log(`Servidor iniciado en ${app.get('port')}`)
})

