import { Schema, model } from "mongoose"
// Encriptacion delas contrasenias
import bcrypt, { compare } from 'bcryptjs'

const userSchema = new Schema({
    username:{
        type: String,
        require: true,
        trim: true
    },
    password:{
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    token: {
        type: String,
        default: null
    },
    confirmEmail: {
        type: Boolean,
        default: false
    },
    status: {
        type: Boolean,
        default: true
    }
    },
{
    timestamps: true
})

// ------Metodos para la seguridad de la cuenta------
// Creacion del metodo para la encriptacion de la contrasenia
userSchema.method.encrypPassword = async function(password){
    // Se especificia la cantidad de caracteres que sera encriptada la password
    const jump = await bcrypt.genSalt(15)
    // Se aplica el metodo hash a la contrasenia junto con el numerod de caracteres
    const passwordEncryp = await bcrypt.hash(password, jump)
    // retorna la contrasenia a la BD
    return passwordEncryp
}
// ------ Metodo de verificacion de contrasenia correcta ------
userSchema.method.matchPassword = async function(password){
    // Se crea una variable que almacena el proceso de comparacion propio de bcrypt
    const response = await bcrypt.compare(password, this.password)
    // retorna la respuesta 
    return response
}
// ------ Metodo para el token de autentifiacion de la cuenta
userSchema.method.createToken = function(){
    // Se trata de un metodo que crea una variable aleatoria entre caracteres 0-1, 0-9 y letras y finalmente 
    // elimina los 2 primeros caracteres de la variable
    const tokenGenerate = this.token = Math.random().toString(36).slice(2)
    return tokenGenerate
}

export default model('Usuarios', userSchema)