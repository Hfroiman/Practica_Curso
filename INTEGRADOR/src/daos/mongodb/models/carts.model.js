import { model, Schema } from "mongoose";

const CartsSchema = new Schema({
    id:{type:String},
    product:[
        {
            id_product:{type:String, required:true},
            quantity:{type:Number, default:1}
        }
    ]
});

export const CartsModel = model('carts', CartsSchema);