import { model, Schema } from "mongoose";

const ProductSchema = new Schema({
    name:{type:String, required:true, max:30},
    price:{type:Number, required:true},
    imgURL:{type:String}
});

export const ProductModel = model('product', ProductSchema);