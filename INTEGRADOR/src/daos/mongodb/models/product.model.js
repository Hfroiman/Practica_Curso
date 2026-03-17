import { model, Schema } from "mongoose";

const ProductSchema = new Schema({
    title:{type:String, required:true},
    descripcion:{type:String, required:true},
    code:{type:String, required:true},
    price:{type:Number, required:true},
    status:{type:Boolean, required:true, default:true},
    stock:{type:Number, required:true},
    category:{type:String, required:true},
    thumbnails:{type:[String]},//Es para las rutas donde estan almacenadas las imagenes del prod
});

export const ProductModel = model('products', ProductSchema);