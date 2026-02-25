import { ProductModel } from './models/product.model.js'

export default class ProductDaoMongodb{
    async getAll(){
        try {
            const response = await ProductModel.find({})
            return response
        } catch (error) {
            throw new error(error);
        }
    }

    async getByid(id){
        try {
            const response = await ProductModel.findById(id)
            return response
        } catch (error) {
            throw new error(error);
        }
    }

    async create(obj){
        try {
            const response = await ProductModel.create(obj)
            return response
        } catch (error) {
            throw new error(error);
        }
    }

    async update(id, obj){
        try {
            const response = await ProductModel.findByIdAndUpdate(id,obj,{ new: true,});
            return response;
        } catch (error) {
            throw new error(error);
        }
    }
    
    async delete(id){
        try {
            const response = await ProductModel.findByIdAndDelete(id);
            return response;
        } catch (error) {
            throw new error(error);
        }
    }
}