import { model, Schema } from "mongoose";
import mongoosepaginate from "mongoose-paginate-v2"

const CartsSchema = new Schema({
    product:[
        {   productId:
            {
                type: Schema.Types.ObjectId,
                ref:'products'
            },
            quantity:{
                type:Number,
                default:1
            }
        }
    ]
});

CartsSchema.plugin(mongoosepaginate);

export const CartsModel = model('carts', CartsSchema);