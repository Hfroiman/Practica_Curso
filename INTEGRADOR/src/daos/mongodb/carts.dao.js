import {CartsModel} from './models/carts.model.js';

export default class CartsDaoMongoDb{
    async getall(page=1, limit=10){
        try {
            const response = await CartsModel.paginate({},{page, limit});
            return response;
        }catch (error) {
            throw new Error(error)
        }
    }

    async create(obj){
        try {
            const response = await CartsModel.create(obj);
            return response;
        }catch (error) {
            throw new Error(error)
        }
    }

    async getbyid(cid){
        try {
            const response = await CartsModel.findById(cid).populate("product.productId");
            return response;
        }catch (error) {
            throw new Error(error)
        }
    }

    async update(id, pid){
        try {
            const exist = await CartsModel.findOne({_id:id, "product.id_product":pid});
            if(!exist){
                const response = await CartsModel.findByIdAndUpdate(id,{
                    $push: { product:{id_product:`${pid}`}}
                });
                return response;
            }else{
                const response = await CartsModel.findOneAndUpdate(
                    { _id:id, "product.id_product": pid },
                    {$inc:{"product.$.quantity":1}},
                    {new: true}
                );
                return response;
            }
        }catch (error) {
            throw new Error(error);
        }
    }

    ///segunda enntrega
    async removeSelect(cid, pid){
        try {
            const response = await CartsModel.findByIdAndUpdate(
                { _id:cid},
                {$pull:{product: {id_product:`${pid}`}}},
                {new: true}
            );
            return response;
        }catch (error) {
            throw new Error(error)
        }
    }

    async updatexSelect(cid, pid, cantselect){
        try {
            const response = await CartsModel.findOneAndUpdate(
                    { _id:cid, "product.id_product": pid },
                    {$set:{"product.$.quantity":cantselect}},
                    {new: true}
                );
            return response;
        }catch (error) {
            throw new Error(error)
        }
    }

    async remove(cid){
        try {
            const response = await CartsModel.findByIdAndUpdate(cid,
                {$set: {product: []}}
            );
            return response;
        }catch (error) {
            throw new Error(error)
        }
    }
}