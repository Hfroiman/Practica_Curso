import mongoose from 'mongoose'

const connectionString = process.env.connectionString || "mongodb://localhost:27017/Proyecto-prueb"

export const InitMongodb = async ()=> {
    try{
        await mongoose.connect(connectionString);
        console.log('conectado a la BD');
    }catch(error){
        console.log(error);
    }
}