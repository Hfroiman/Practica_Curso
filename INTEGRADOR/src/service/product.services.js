import ProductDaoMongodb from '../daos/mongodb/product.dao.js'
const prodDao = new ProductDaoMongodb();

//import { __dirname } from '.../utils.js'

export const getall = async()=>{
    try {
        return await prodDao.getAll();
    } catch (error) {
        throw new Error(error);
    }
}

export const getbyId = async (id) =>{
    try {
        return await prodDao.getByid(id);
    } catch (error) {
        throw new Error(error);
    }
}

export const create = async (obj) =>{
    try {
        return await prodDao.create(obj);
    } catch (error) {
        throw new Error(error);
    }
}

export const update = async (id, obj) =>{
    try {
        return await prodDao.update(id, obj);
    } catch (error) {
        throw new Error(error);
    }
}

export const remove = async (id) =>{
    try {
        return await prodDao.delete(id);
    } catch (error) {
        throw new Error(error);
    }
}