import {CartsModel} from './models/carts.model.js';

export default class CartsDaoMongoDb{
    async getall(){
        try {
            const response = await CartsModel.find();
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

    async getbyid(id){
        try {
            const response = await CartsModel.findById(id);
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

    async remove(id){
        try {
            const response = await CartsModel.findByIdAndDelete(id);
            return response;
        }catch (error) {
            throw new Error(error)
        }
    }

}