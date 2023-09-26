import mongoose from "mongoose";

mongoose.set('strictQuery', true)
const connection = async()=>{
    try {
        const {connection} = await mongoose.connect(process.env.DATABASE_MONGO,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log(`Base de datos conectada!!`)
    } catch (error) {
        console.log(error)
    }
}

export default connection